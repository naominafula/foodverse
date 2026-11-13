from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.database import get_db
from app.schemas.order import CheckoutRequestSchema
from app.services.order_service import OrderService
from app.services.mpesa_service import MPesaService

router = APIRouter(prefix="/api/orders", tags=["Orders"])

@router.post("/checkout")
async def checkout_order(payload: CheckoutRequestSchema, db: Session = Depends(get_db)):
    # 1. Create order in DB and calculate secure server-side total
    order, total_amount = OrderService.create_pending_order(db, payload)

    # 2. Automatically trigger M-Pesa STK Push for that secure total
    stk_response = await MPesaService.trigger_stk_push(phone=payload.phone, amount=int(total_amount))

    # Optional: Save checkout request ID to order record
    if "CheckoutRequestID" in stk_response:
        order.checkout_request_id = stk_response["CheckoutRequestID"]
        db.commit()

    return {
        "success": True,
        "order_id": order.id,
        "total_amount": total_amount,
        "message": "Order created & STK push triggered successfully.",
        "stk_response": stk_response
    }
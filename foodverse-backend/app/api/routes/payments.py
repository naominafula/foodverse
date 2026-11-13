from fastapi import APIRouter
from pydantic import BaseModel, Field
from app.services.mpesa_service import MPesaService

router = APIRouter(prefix="/api/mpesa", tags=["M-Pesa Payments"])

class STKPushRequest(BaseModel):
    phone: str = Field(..., description="Customer phone number")
    amount: int = Field(..., gt=0, description="Amount in KSh")

@router.post("/stkpush")
async def initiate_stk_push(payload: STKPushRequest):
    result = await MPesaService.trigger_stk_push(phone=payload.phone, amount=payload.amount)
    return {
        "success": True,
        "message": "STK push initiated successfully. Check your phone.",
        "data": result
    }

@router.post("/callback")
async def mpesa_callback(payload: dict):
    # Safaricom sends transaction status results here once the user inputs their PIN
    print("M-Pesa Callback Received:", payload)
    return {"ResultCode": 0, "ResultDesc": "Accepted"}
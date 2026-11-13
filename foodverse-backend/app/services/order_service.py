from sqlalchemy.orm import Session
from app.db.models import Order, OrderItem, MenuItem
from app.schemas.order import CheckoutRequestSchema

class OrderService:
    @staticmethod
    def create_pending_order(db: Session, payload: CheckoutRequestSchema) -> tuple:
        calculated_total = payload.delivery_fee
        order_items_data = []

        for item in payload.items:
            menu_item = db.query(MenuItem).filter(MenuItem.id == item.menu_item_id).first()
            if not menu_item:
                # Fallback default price lookup if menu item isn't pre-seeded in SQLite yet
                unit_price = 300.0  # e.g., default price for fruit juice
            else:
                unit_price = menu_item.price

            line_total = unit_price * item.quantity
            calculated_total += line_total

            order_items_data.append({
                "menu_item_id": item.menu_item_id,
                "quantity": item.quantity,
                "unit_price": unit_price
            })

        # Save Order in PENDING state
        new_order = Order(
            customer_phone=payload.phone,
            total_amount=calculated_total,
            status="PENDING"
        )
        db.add(new_order)
        db.commit()
        db.refresh(new_order)

        # Save associated order items
        for od in order_items_data:
            order_item = OrderItem(
                order_id=new_order.id,
                menu_item_id=od["menu_item_id"],
                quantity=od["quantity"],
                unit_price=od["unit_price"]
            )
            db.add(order_item)
        db.commit()

        return new_order, calculated_total
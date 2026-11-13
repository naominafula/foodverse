from pydantic import BaseModel, Field
from typing import List

class CartItemSchema(BaseModel):
    menu_item_id: int
    quantity: int = Field(..., gt=0)

class CheckoutRequestSchema(BaseModel):
    phone: str = Field(..., description="Customer phone number (e.g. 0724...)")
    items: List[CartItemSchema]
    delivery_fee: float = 0.0
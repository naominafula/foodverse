from pydantic import BaseModel, Field

class STKPushRequest(BaseModel):
    phone: str = Field(..., description="Customer phone number")
    amount: int = Field(..., gt=0, description="Amount in KSh")
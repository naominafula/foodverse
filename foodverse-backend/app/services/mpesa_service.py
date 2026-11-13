import base64
from datetime import datetime
import httpx
from fastapi import HTTPException
from app.core.config import settings

class MPesaService:
    @staticmethod
    async def get_access_token() -> str:
        url = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials"
        async with httpx.AsyncClient() as client:
            try:
                response = await client.get(url, auth=(settings.CONSUMER_KEY, settings.CONSUMER_SECRET))
                response.raise_for_status()
                return response.json()["access_token"]
            except Exception as e:
                raise HTTPException(status_code=500, detail=f"Failed to authenticate with Safaricom: {str(e)}")

    @staticmethod
    async def trigger_stk_push(phone: str, amount: int) -> dict:
        # Normalize phone number (e.g., 0724... -> 2547...)
        clean_phone = phone.strip()
        if clean_phone.startswith("0"):
            clean_phone = "254" + clean_phone[1:]
        elif clean_phone.startswith("+"):
            clean_phone = clean_phone[1:]

        token = await MPesaService.get_access_token()
        timestamp = datetime.now().strftime("%Y%m%d%H%M%S")
        password_str = f"{settings.SHORTCODE}{settings.PASSKEY}{timestamp}"
        password = base64.b64encode(password_str.encode()).decode("utf-8")

        payload = {
            "BusinessShortCode": settings.SHORTCODE,
            "Password": password,
            "Timestamp": timestamp,
            "TransactionType": "CustomerPayBillOnline",
            "Amount": amount,
            "PartyA": clean_phone,
            "PartyB": settings.SHORTCODE,
            "PhoneNumber": clean_phone,
            "CallBackURL": settings.CALLBACK_URL,
            "AccountReference": "Foodverse",
            "TransactionDesc": "Foodverse Order Payment"
        }

        headers = {"Authorization": f"Bearer {token}"}
        url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest"

        async with httpx.AsyncClient() as client:
            try:
                response = await client.post(url, json=payload, headers=headers)
                response.raise_for_status()
                return response.json()
            except httpx.HTTPStatusError as e:
                raise HTTPException(status_code=400, detail=e.response.json())
            except Exception as e:
                raise HTTPException(status_code=500, detail=str(e))
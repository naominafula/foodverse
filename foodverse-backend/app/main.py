from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.routes.payments import router as payments_router

app = FastAPI(title="Foodverse API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(payments_router)

@app.get("/")
async def root():
    return {"message": "Foodverse backend is running"}

@app.get("/health")
async def health():
    return {"status": "ok"}
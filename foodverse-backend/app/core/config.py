from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    CONSUMER_KEY: str
    CONSUMER_SECRET: str
    SHORTCODE: str = "174379"
    PASSKEY: str
    CALLBACK_URL: str
    
    class Config:
        env_file = ".env"

settings = Settings()
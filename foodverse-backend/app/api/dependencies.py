from app.db.database import get_db

# Re-exported for route clean imports
def get_db_session():
    return get_db()
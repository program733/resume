from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

from app.api.endpoints import patients, doctors

app = FastAPI()

# CORS
origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(patients.router, prefix="/api/v1", tags=["patients"])
app.include_router(doctors.router, prefix="/api/v1", tags=["doctors"])

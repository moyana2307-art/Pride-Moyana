from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

app = FastAPI()

# Enable cross-origin requests so your local index.html can talk to the backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ContactForm(BaseModel):
    name: str
    email: EmailStr
    message: str

# Email Server Configurations
SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587
MY_EMAIL = "moyana2307@gmail.com"
# Crucial: Replace this string with your actual 16-character Google App Password
MY_APP_PASSWORD = "your_16_character_app_password" 

@app.post("/api/contact")
async def send_contact_email(payload: ContactForm):
    try:
        # Create Email Container
        msg = MIMEMultipart()
        msg['From'] = MY_EMAIL
        msg['To'] = MY_EMAIL
        msg['Subject'] = f"💼 Portfolio Inquiry: {payload.name}"
        
        # Structure clear message layout
        email_content = f"""
        You received a new message from your portfolio site:
        
        Name: {payload.name}
        Email: {payload.email}
        
        Message:
        {payload.message}
        """
        msg.attach(MIMEText(email_content, 'plain'))
        
        # Establish connection to Gmail SMTP Server
        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()  # Encrypt the link
        server.login(MY_EMAIL, MY_APP_PASSWORD)
        
        # Send mail and close connection
        server.sendmail(MY_EMAIL, MY_EMAIL, msg.as_string())
        server.quit()
        
        return {"status": "success", "message": "Email delivered directly."}
        
    except Exception as e:
        print(f"SMTP Error encountered: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed routing email notification via SMTP.")
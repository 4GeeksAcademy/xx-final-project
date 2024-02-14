import os
from email.message import EmailMessage
import ssl
import smtplib


email_sender = "sightseeker2024@gmail.com"
email_password = os.environ.get("EMAIL_PASSWORD")
email_receiver = "cammyhale21@gmail.com"

subject = "Password Recovery"

body = """
This is a test to send an email from backend
"""

em = EmailMessage()

em['From'] = email_sender
em['To'] = email_receiver
em["Subject"] = subject
em.set_content(body)

context = ssl.create_default_context()

with smtplib.SMTP_SSL("smtp.gmail.com", 3001, context=context) as smtp:
    smtp.login(email_sender, email_password)
    smtp.sendmail(email_sender, email_receiver, em.as_string())
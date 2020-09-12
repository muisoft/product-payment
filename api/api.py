import time
import os
import stripe

from flask import Flask

app = Flask(__name__)

stripe_keys = {
    "secret_key": os.getenv('STRIPE_SECRET_KEY'),
    "publishable_key": os.getenv('STRIPE_PUBLISHABLE_KEY')
}

stripe.api_key = stripe_keys['secret_key']

@app.route('/checkout-session')
def create_checkout_session():
    return {'message': 'Created Scuccessfully'}
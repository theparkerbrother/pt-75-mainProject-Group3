"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from supabase import create_client
import os

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)

# Initialize Supabase client
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")
supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

@api.route('/register', methods=['POST'])
def register():
    """Handles user registration with Supabase."""
    try:
        data = request.get_json()
        email = data.get("email")
        password = data.get("password")

        if not email or not password:
            return jsonify({"error": "Email and password are required"}), 400

        response = supabase.auth.sign_up({"email": email, "password": password})

        # Extract user and error attributes
        user = response.user
        error = response.__dict__.get("error")  # Some versions may store error differently

        if error:
            return jsonify({"error": str(error)}), 400

        # Manually serialize the user object to a dictionary
        user_data = {
            "id": user.id,
            "email": user.email,
            "created_at": user.created_at,
            "updated_at": user.updated_at
        }

        return jsonify({
            "message": "User registered successfully",
            "user": user_data
        }), 201

    except Exception as e:
        return jsonify({"error": str(e)}), 500


@api.route('/login', methods=['POST'])
def login():
    """Handles user login with Supabase."""
    try:
        data = request.get_json()
        email = data.get("email")
        password = data.get("password")

        if not email or not password:
            return jsonify({"error": "Email and password are required"}), 400

        # Attempt to log in with Supabase
        response = supabase.auth.sign_in_with_password({
            "email": email,
            "password": password
        })

        user = response.user
        session = response.session

        if not user or not session:
            return jsonify({"error": "Invalid credentials or user not confirmed"}), 400

        return jsonify({
            "message": "User logged in successfully",
            "user": {
                "id": user.id,
                "email": user.email,
                "created_at": user.created_at
            },
            "session": {  # Include the full session object
                "access_token": session.access_token,
                "refresh_token": session.refresh_token,
                "expires_in": session.expires_in,
                "expires_at": session.expires_at,
                "token_type": session.token_type
            }
        }), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500




@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

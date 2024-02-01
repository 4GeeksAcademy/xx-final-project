import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, FavoritePark
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import decode_token

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/token', methods=['POST'])
def create_token():

    email = request.json.get("email", None)
    password = request.json.get("password", None)
    if email is None or password is None:
        return jsonify({"msg": "Bad email or password"}), 401
    
    user = User.query.filter(User.email == email).first()
    if user is None or user.password != password:
        return jsonify({"msg": "Bad email or password"}), 401
        
    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)


@api.route('/signup', methods=['POST'])
def sign_up():

    email = request.json.get("email", None)
    password = request.json.get("password", None)
    if email is None or password is None:
        return jsonify({"msg": "Bad email or password"}), 401
    
    if User.query.filter(User.email == email).first() :
        return jsonify({"msg": "Email already in use"}), 400
    
    user = User(email=email, password=password, is_active=True)
    db.session.add(user)
    db.session.commit()
    return jsonify({"msg": "Success"}), 200

@api.route('/favorite', methods=['POST'])
@jwt_required()
def add_fav():
    def decode_jwt_token(token):
        try:
            decodeded_token = decode_token(token)

            return decodeded_token
        except Exception as e:
            print (f"Error decoding JWT token: {str(e)}")
            return None
    
    authorization_header = request.headers.get("Authorization")
        
    jwt_token = authorization_header.split(" ")[1]

    decoded_token = decode_jwt_token(jwt_token)

    if not decoded_token:
        return jsonify({"msg": "Failed to decode the token"}), 401
    
    print("Decoded Token:", decoded_token)

    user_email = decoded_token["sub"]

    user=User.query.filter(User.email == user_email).first()

    if not user:
        return jsonify({"msg": "User not found"}), 404
    
    user_id = user.id

    park = request.json.get("park_id", None)
    
    if FavoritePark.query.filter(FavoritePark.user_id == user_id, FavoritePark.park_id == park).first() :
        return jsonify({"msg": "Favorite already saved"}), 400

    db.session.add(FavoritePark(user_id = user_id, park_id = park))
    db.session.commit()
    return jsonify({"msg": "Success"}), 200

@api.route('/favorites', methods=['GET'])
@jwt_required()
def get_fav():
    def decode_jwt_token(token):
        try:
            decodeded_token = decode_token(token)

            return decodeded_token
        except Exception as e:
            print (f"Error decoding JWT token: {str(e)}")
            return None
    
    authorization_header = request.headers.get("Authorization")
        
    jwt_token = authorization_header.split(" ")[1]

    decoded_token = decode_jwt_token(jwt_token)

    if not decoded_token:
        return jsonify({"msg": "Failed to decode the token"}), 401
    
    print("Decoded Token:", decoded_token)

    user_email = decoded_token["sub"]

    user=User.query.filter(User.email == user_email).first()

    if not user:
        return jsonify({"msg": "User not found"}), 404
    
    user_id = user.id
    favorites = [fav[0] for fav in db.session.query(FavoritePark.park_id).filter(FavoritePark.user_id == user_id).all()]

    return jsonify({"favorites": favorites}), 200

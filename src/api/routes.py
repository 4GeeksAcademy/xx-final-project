import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, FavoritePark, UserInfo, UserPhoto
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from sqlalchemy import and_
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

@api.route('/favorite/<string:park_id>', methods=['DELETE'])
@jwt_required()
def del_fav(park_id):
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
    
    delete_fav = FavoritePark.query.filter(and_(FavoritePark.user_id == user_id, FavoritePark.park_id == park_id)).first()

    if not delete_fav:
        return jsonify({"msg": "Favorite not found"}), 404

    db.session.delete(delete_fav)
    db.session.commit()
    return jsonify({"msg": "Success"}), 200

@api.route('/userinfo', methods=['POST'])
def set_info():
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
    
    data=request.get_json()

    name = data.get("name", "")
    bio = data.get("bio", "")

    user_info = UserInfo.query.filter_by(user_id=user.id).first()

    if not user_info:
        user_info = UserInfo(user_id=user.id, name=name, bio=bio)
        db.session.add(user_info)
    else: 
        user_info.name = name
        user_info.bio = bio

    db.session.commit()
    return jsonify({"msg": "Success"}), 200

@api.route('/userinfo', methods=['PUT'])
def update_info():
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
    
    user_info = UserInfo.query.filter_by(user_id=user.id).first()

    if not user_info:
        return jsonify({"msg": "User information not found"}), 404
    
    try:
        data = request.get_json()

        if 'name' in data:
            user_info.name = data["name"]
        if "bio" in data:
            user_info.bio = data['bio']
    except Exception as e:
        db.session.rollback()
        return ({"msg": f"Error updating user information: {str(e)}"}), 500
    
    db.session.commit()
    return jsonify({"msg": "Success"}), 200

@api.route('/usersinfo', methods=['GET'])
@jwt_required()
def get_info():
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
    
    user_email = decoded_token["sub"]

    user = User.query.filter(User.email == user_email).first()

    user_info = UserInfo.query.filter_by(user_id=user.id).first()

    if not user_info:
        return jsonify({"msg": "User information not found"}), 404 
    
    user_info_data = {
        "name": user_info.name,
        "bio": user_info.bio
    }
    
    return jsonify(user_info_data), 200

# @api.route('/upload', methods=['POST'])
# def upload_photo():
#     def decode_jwt_token(token):
#         try:
#             decodeded_token = decode_token(token)

#             return decodeded_token
#         except Exception as e:
#             print (f"Error decoding JWT token: {str(e)}")
#             return None
    
#     authorization_header = request.headers.get("Authorization")
        
#     jwt_token = authorization_header.split(" ")[1]

#     decoded_token = decode_jwt_token(jwt_token)

#     if not decoded_token:
#         return jsonify({"msg": "Failed to decode the token"}), 401
    
#     print("Decoded Token:", decoded_token)

#     user_email = decoded_token["sub"]

#     user=User.query.filter(User.email == user_email).first()

#     if not user:
#         return jsonify({"msg": "User not found"}), 404

#     if request.files and "photo" in request.files:
#        photo_file = request.files["photo"]
#        photo_path = f"uploads/{user.id}_{photo_file.filename}"
#        photo_file.save(photo_path)

#     new_photo = UserPhoto(user=user, photo=photo_path)

#     db.session.add(new_photo)
#     db.session.commit()

#     return jsonify({"msg": "Success"}), 200

import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, FavoritePark, UserInfo, UserPhoto, UserActivity
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

@api.route('/useractivities', methods=['POST'])
def set_activity():
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
    
    try:
        data = request.get_json()
        activity_type = data.get("activity_type", "")

        if not activity_type:
            return jsonify({"msg": "Invalid activity type"}), 400
        
        existing_activity = UserActivity.query.filter_by(user_id=user.id, activity_type=activity_type).first()
        if existing_activity:
            return jsonify({"msg": "Activity already exists for the user"}), 400
        
        new_activity = UserActivity(user_id=user.id, activity_type=activity_type)
        db.session.add(new_activity)
        db.session.commit()
    except Exception as e:
        db.session.rollback()
        return jsonify({"msg": f"Error updating user activities: {str(e)}"}), 500

    return jsonify({"msg": "Success"}), 200

@api.route('/activity/<string:activity>', methods=['DELETE'])
@jwt_required()
def del_act(activity):
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
    
    delete_act = UserActivity.query.filter(and_(UserActivity.user_id == user_id, UserActivity.activity_type == activity)).first()

    if not delete_act:
        return jsonify({"msg": "Activity not found"}), 404

    db.session.delete(delete_act)
    db.session.commit()
    return jsonify({"msg": "Success"}), 200


@api.route('/useractivities', methods=['GET'])
@jwt_required()
def get_activity():
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

    if not user:
        return jsonify({"msg": "User not found"}), 404
    
    user_activities = UserActivity.query.filter_by(user_id=user.id).all()

    if not user_activities:
        return jsonify({"msg": "No activities found for the user"}), 404
    
    activities_data = [{"activity_type": activity.activity_type} for activity in user_activities]

    return jsonify(activities_data), 200

@api.route('/uploadphoto', methods=['POST'])
def upload_photo():
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

    if 'photo' not in request.files:
        return jsonify({"msg": "No photo uploaded"}), 400

    photo_file = request.files['photo']

    if photo_file.filename == '':
        return jsonify({"msg": "No selected file"}), 400

        
    allowed_extensions = {'png', 'jpg', 'jpeg', 'gif'}
    if '.' in photo_file.filename and photo_file.filename.rsplit('.', 1)[1].lower() not in allowed_extensions:
        return jsonify({"msg": "Invalid file type"}), 400

    photo_path = f"uploads/{user.id}_{secure_filename(photo_file.filename)}"
    photo_file.save(photo_path)

    user_photo = UserPhoto(user_id=user.id, photo="base64_encoded_photo_data", photo_path="/path/to/photo.jpg")
    db.session.add(user_photo)
    db.session.commit()

    return jsonify({"msg": "Success", "photo_path": photo_path}), 200

@api.route('/usersphoto', methods=['GET'])
@jwt_required()
def get_photo():
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

    if not user:
        return jsonify({"msg": "User not found"}), 404
    
    user_photo = UserPhoto.query.filter_by(user_id=user.id).first()

    if not user_photo:
        return jsonify({"msg": "No photo found for the user"}), 404
    
    photo_path = user_photo.photo_path

    return jsonify(photo_data), 200


@api.route('/updatephoto', methods=['PUT'])
def update_photo():
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
    
    user_info = UserPhoto.query.filter_by(user_id=user.id).first()

    if not user_info:
        return jsonify({"msg": "User Photo not found"}), 404
    
    try:
        data = request.get_json()

        if 'name' in data:
            user_info.name = data["name"]
    except Exception as e:
        db.session.rollback()
        return ({"msg": f"Error updating user information: {str(e)}"}), 500
    
    db.session.commit()
    return jsonify({"msg": "Success"}), 200
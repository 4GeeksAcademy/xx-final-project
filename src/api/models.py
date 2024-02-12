from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "favorite_parks": [fav_park.park.serialize() for fav_park in self.favorite_parks]
            # do not serialize the password, its a security breach
        }

    photos = db.relationship("UserPhoto", backref="user", lazy=True)

class FavoritePark(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    park_id = db.Column(db.String(100), nullable=False)

    user = db.relationship('User', backref=db.backref('favorite_parks', lazy=True))

class UserInfo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    name = db.Column(db.String(80), unique=False, nullable=False)
    bio = db.Column(db.String(500), unique=False, nullable=False)

class UserPhoto(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    photo = db.Column(db.String(80), unique=False, nullable=False)
    photo_path = db.Column(db.String(255))

class UserActivity(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    activity_type = db.Column(db.String(200), nullable=False) 
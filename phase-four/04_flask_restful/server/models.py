from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

from config import db

class Post(db.Model, SerializerMixin):
    __tablename__ = 'posts'

    serialize_rules = ('-comments.post',)

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String)
    body = db.Column(db.String)

    # comments = db.relationship('Comment', back_ref='post')
    comments = db.relationship('Comment', back_populates='post', cascade='all, delete-orphan')
    users_commented = association_proxy('comments', 'user')

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    serialize_rules = ('-comments.user',)

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)

    comments = db.relationship('Comment', back_populates='user')
    posts_commented = association_proxy('comments', 'post')

class Comment(db.Model, SerializerMixin):
    __tablename__ = 'comments'

    serialize_rules = ('-post.comments', '-user.comments',)

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String)
    post_id = db.Column(db.Integer, db.ForeignKey('posts.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    post = db.relationship('Post', back_populates='comments')
    user = db.relationship('User', back_populates='comments')
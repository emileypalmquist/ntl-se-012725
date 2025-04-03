import ipdb
from flask import make_response, request
from flask_restful import Resource

from config import app, db, api
from models import Post, Comment, User 

# @app.route('/posts', methods=['GET', 'POST'])
# def posts():
#     if request.method == 'GET':
#         posts = db.session.execute(db.select(Post)).scalars()
#         response = [post.to_dict() for post in posts]
#         return make_response(response)
#     elif request.method == 'POST':
#         params = request.json
#         post = Post(title=params['title'] , body=params['body'])
#         db.session.add(post)
#         db.session.commit()
#         return make_response(post.to_dict(), 201)

class Posts(Resource):
    def get(self):
        posts = db.session.execute(db.select(Post)).scalars()
        # post.to_dict(rules=('-comments',))
        response = [post.to_dict(only=('id', 'title',)) for post in posts]
        return make_response(response)

    def post(self):
        params = request.json
        post = Post(title=params['title'] , body=params['body'])
        db.session.add(post)
        db.session.commit()
        return make_response(post.to_dict(), 201)

class PostById(Resource):
    def get(self, id):
        post = db.session.execute(db.select(Post).filter_by(id=id)).scalar_one()
        return make_response(post.to_dict())
    
    def patch(self, id):
        post = db.session.execute(db.select(Post).filter_by(id=id)).scalar_one()
        params = request.json
        for attr in params:
            setattr(post, attr, params[attr])
        db.session.commit()
        return make_response(post.to_dict())
    
    def delete(self, id):
        post = db.session.execute(db.select(Post).filter_by(id=id)).scalar_one()
        db.session.delete(post)
        db.session.commit()
        return make_response({'message': f'Successfully deleted post with id={id}'})
        # return make_response('', 204)

api.add_resource(Posts, '/posts')
api.add_resource(PostById, '/posts/<int:id>')
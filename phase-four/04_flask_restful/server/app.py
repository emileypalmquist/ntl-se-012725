import ipdb
from flask import make_response, request

from config import app, db
from models import Post, Comment, User 

@app.route('/posts', methods=['GET', 'POST'])
def posts():
    if request.method == 'GET':
        posts = db.session.execute(db.select(Post)).scalars()
        response = [post.to_dict() for post in posts]
        return make_response(response)
    elif request.method == 'POST':
        params = request.json
        post = Post(title=params['title'] , body=params['body'])
        db.session.add(post)
        db.session.commit()
        return make_response(post.to_dict(), 201)



from config import app, db
from flask import make_response, request
from models.dog import Dog
# environment variables
# FLASK_APP=app.py
# FLASK_DEBUG=true
# FLASK_RUN_PORT=5555

# RESTful routes
# GET all   '/dogs'
# GET one   '/dogs/<int:id>'
# POST      '/dogs'
# PATCH     '/dogs/<int:id>'
# DELETE    '/dogs/<int:id>'

@app.route('/dogs', methods=['GET'])
def dogs():
    # db.session.execute(db.select(Dog)).scalars()
    dogs = [dog.to_dict() for dog in Dog.query.all()]
    return make_response(dogs, 200)

@app.route('/dogs/<int:id>', methods=['GET', 'PATCH'])
def dog_by_id(id):
    dog = Dog.query.get(id)
    if dog:
        if request.method == 'GET':
            return make_response(dog.to_dict())
        elif request.method == 'PATCH':
            data = request.json
            for attr in data:
                # dog[attr] = data[attr]
                setattr(dog, attr, data[attr])
            db.session.commit()
            return make_response(dog.to_dict(), 200)
    else:
        return make_response({'error': 'Dog not found'}, 404)
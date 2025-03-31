#!/usr/bin/env python3
# 1a. Set Up Imports
from flask import Flask, request, make_response
import ipdb

# set FLASK_APP environment variable
# export FLASK_APP=server/app.py

# turn on the debug mode - restart server when make changes to the file
# export FLASK_DEBUG=true

# set run port to something other than 5000
# export FLASK_RUN_PORT=5555

# 1b. Create instance of Flask
app = Flask(__name__)

# 2. Create a / route that returns Hello World
@app.route('/', methods=['GET'])
def hello_world():
    print('hit view')
    return make_response({'message': 'Hello World!'})

#3. Create a path /dogs
# 3a. import make_response
# 3b. Use the `route` decorator
# 3c. return a response
@app.route('/dogs', methods=['GET', 'POST'])
def dogs():
    if request.method == 'GET':
        # find all dogs
        return [
            {
                'name': 'Apollo',
                'age': 3
            },
            {
                'name': 'Daisy',
                'age': 3
            },
            {
                'name': 'Bailey',
                'age': 13
            }
        ]
    elif request.method == 'POST':
        # handle creating dog and saving it in database
        return make_response({
            "message": "successfully able to create the dog"
        }, 201)

# 4. Create a dynamic route
# 4a. Use the route decorator
# 4b. Return result as JSON
# "/dogs/:id"
@app.route('/dogs/<int:id>', methods=['GET'])
def dog_by_id(id):
    # find dog by id
    # send back the info of the dog that matches that id
    # or if there was error(couldn't find dog) send back error message
    return {
        "id": id,
        "name": "Apollo",
        "age": 3
    }

# 6. Use the before_request request hook, what this hook does is up to you. You could hit a breakpoint, print something to server console or anything else you can think of.
@app.before_request
def runs_before():
    print('run before request')

@app.after_request
def runs_after(response):
    print('run after request')
    return response

# Note: If you'd like to run the application as a script instead of using `flask run`, uncomment the line below 
# and run `python app.py`

# if __name__ == '__main__':
#     app.run(port=5555, debug=True)
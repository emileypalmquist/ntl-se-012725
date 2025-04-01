from flask import Flask 
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///dogs.db'

db = SQLAlchemy()

db.init_app(app)

migrate = Migrate(app, db)


# flask db init - creates a new migration repository
        #       - run one time, don't run if already have migration directory

# flask db migrate -m"detailed message of what has changed"
#                  - alias for flask db revision --autogenerate command
#                  - takes a look at the models that are imported in app
#                  - compares the models to the current of the database
#                  - create new migration with how to update the database

# flask db upgrade - upgrade to the head/ or most recent migration
#                  - can specify a revision id to only run up to the point of that migration

# flask db downgrade - downgrade the last revision/migration
#                    - can specify a revision id to run up to the point of that migration
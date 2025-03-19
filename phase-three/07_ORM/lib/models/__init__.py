import sqlite3

# connects to sqlite db
CONN = sqlite3.connect('development.db')

# communicate with the db
CURSOR = CONN.cursor()
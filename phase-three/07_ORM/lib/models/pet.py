from models.__init__ import CONN, CURSOR
import ipdb

class Pet:

    def __init__(self, name="Pet", age=0, breed='Unknown', owner_id=None, id=None):
        self.name = name
        self.age = age
        self.breed = breed
        self.owner_id = owner_id
        self.id = id

    def __repr__(self):
        return f'<Pet name={self.name} owner={self.owner_id}>'

    def save(self):
        sql = """
            INSERT INTO pets (name, age, breed, owner_id)
            VALUES (?, ?, ?, ?);
        """
        CURSOR.execute(sql, (self.name, self.age, self.breed, self.owner_id))
        CONN.commit()

        self.id = CURSOR.lastrowid
    
    @classmethod
    def instance_from_row(cls, row):
        return cls(name=row[1], age=row[2], breed=row[3], owner_id=row[4], id=row[0])
    
    @classmethod
    def find_by_owner_id(cls, owner_id):
        sql = """
            SELECT * FROM pets
            WHERE owner_id = ?;
        """
        pet_rows = CURSOR.execute(sql, (owner_id,)).fetchall()
        return [cls.instance_from_row(row) for row in pet_rows]

    @classmethod
    def create(cls, name="Pet", age=0, breed='Unknown', owner_id=None):
        new_pet = cls(name=name, age=age, breed=breed, owner_id=owner_id)
        new_pet.save()
        return new_pet

    @classmethod
    def delete_all(cls):
        sql = """
            DELETE FROM pets;
        """

        CURSOR.execute(sql)
        CONN.commit()

    @classmethod
    def create_table(cls):
        sql = """
            CREATE TABLE IF NOT EXISTS pets (
                id INTEGER PRIMARY KEY,
                name TEXT,
                age INTEGER,
                breed TEXT,
                owner_id INTEGER,
                FOREIGN KEY(owner_id) REFERENCES owners(id)
            );
        """

        CURSOR.execute(sql)
        CONN.commit()

    @classmethod
    def drop_table(cls):
        sql = "DROP TABLE IF EXISTS pets;"

        CURSOR.execute(sql)
        CONN.commit()

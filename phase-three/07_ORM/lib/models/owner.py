#!/usr/bin/env python3
from models.pet import Pet
import ipdb
from models.__init__ import CURSOR, CONN 

class Owner:
    def __init__(self, name, age, experience=0, id=None):
        self.name = name
        self.age = age
        self.experience = experience
        self.id = id

    @property
    def age(self):
        return self._age

    @age.setter
    def age(self, new_age):
        if isinstance(new_age, int):
            self._age = new_age
        else:
            raise TypeError('Age must be an integer')

    def pets(self):
        return Pet.find_by_owner_id(self.id)

    def save(self):
        sql = """
            INSERT INTO owners (name, age, experience)
            VALUES (?, ?, ?);
        """
        
        CURSOR.execute(sql, (self.name, self.age, self.experience))
        CONN.commit()
    
        self.id = CURSOR.lastrowid

    def update(self):
        sql = """
            UPDATE owners
            SET name = ?, experience = ?, age = ?
            WHERE id = ?;
        """
        CURSOR.execute(sql, (self.name, self.experience, self.age, self.id))
        CONN.commit()

    def delete(self):
        sql = """
            DELETE FROM owners
            WHERE id = ?;
        """

        CURSOR.execute(sql, (self.id,))
        CONN.commit()
        self.id = None

    @classmethod
    def instance_from_row(cls, row):
        return cls(name=row[1], age=row[2], experience=row[3], id=row[0])

    @classmethod
    def all(cls):
        sql = """
            SELECT * FROM owners;
        """

        owner_rows = CURSOR.execute(sql).fetchall()
        return [cls.instance_from_row(row) for row in owner_rows]

    @classmethod
    def find_by_id(cls, id):
        sql = """
            SELECT * FROM owners
            WHERE id = ?;
        """

        row = CURSOR.execute(sql, (id,)).fetchone()
        if row:
            return cls.instance_from_row(row)
        else:
            return None

    @classmethod
    def create(cls, name, age, experience=0):
        new_owner = cls(name=name, age=age, experience=experience)
        new_owner.save()
        return new_owner

    @classmethod
    def delete_all(cls):
        sql = """
            DELETE FROM owners;
        """

        CURSOR.execute(sql)
        CONN.commit()

    @classmethod
    def create_table(cls):
        sql = """
            CREATE TABLE IF NOT EXISTS owners (
               id INTEGER PRIMARY KEY,
               name TEXT,
               age INTEGER,
               experience INTEGER
            );
        """

        CURSOR.execute(sql)
        CONN.commit()

    @classmethod
    def drop_table(cls):
        sql = "DROP TABLE IF EXISTS owners;"

        CURSOR.execute(sql)
        CONN.commit()

    def __repr__(self):
        return f'<Owner id={self.id} name={self.name} >'

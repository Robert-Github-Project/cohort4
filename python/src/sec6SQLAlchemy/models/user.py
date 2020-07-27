import sqlite3
from flask_restful import Resource, reqparse
from db import db

class UserModel(db.Model): #This is a model becasue it cannot recieve data or send data.  Models are for internal code
    __tablename__='users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80))
    password = db.Column(db.String(80))

    def __init__(self,_id,username, password):
        self.id= _id
        self.username=username
        self.password=password
    @classmethod
    def find_by_username(cls,username):
        connection = sqlite3.connect('data.db')
        cursor = connection.cursor()

        query = "SELECT * FROM users WHERE username=?"
        result = cursor.execute(query,(username,)) # comma is needed becasue this neds to be a tuple
        row = result.fetchone() # gets first row
        if row:
            user = cls(*row) # *row replaces (row[0],row[1],row[2])
        else:
            user = None
        
        connection.close()
        return user

    @classmethod
    def find_by_id(cls,_id):
        connection = sqlite3.connect('data.db')
        cursor = connection.cursor()

        query = "SELECT * FROM users WHERE id=?"
        result = cursor.execute(query,(_id,)) # comma is needed becasue this neds to be a tuple
        row = result.fetchone() # gets first row
        if row:
            user = cls(*row) # *row replaces (row[0],row[1],row[2])
        else:
            user = None
        
        connection.close()
        return user
import sqlite3

connection = sqlite3.connect('data.db')
cursor = connection.cursor()
# MUST USE integer TO AUTOINCREMENT ID
create_table= "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username text, passwaord text)" 
cursor.execute(create_table)

create_table= "CREATE TABLE IF NOT EXISTS items (name text, price real)" #real means a number that exists.  Can have decimals
cursor.execute(create_table)

# cursor.execute("INSERT INTO items VALUES ('test',10.99)")

connection.commit()

connection.close()
def create_item_in_store(name):
  request_data = request.get_json()
  for store in stores:
    if store['name'] == name:
        new_item = {
            'name': request_data['name'],
            'price': request_data['price']
        }
        store['items'].append(new_item)
        return jsonify(new_item)
  return jsonify ({'message' :'store not found'})


# user_age = input("enter you age: ")
# years = int(user_age)
# months = years*12
# print(f"You age, {years}, is eaqual to {months} montheeeeees.")

# friends = ["rolf","bob"]
# abroad = friends
# print(friends is abroad)

# day = input("put in day")
# if day =="m":
#     print("boo")
# elif day=="t":
#     print("tuesday")
# else:
#     print("yay")

# movie = ["bob", "rolf","jen"]
# user = input("movie")
# if user in movie:
#     print("i watched it")
# else: print("nope")

# number = 7
# user = "y"
# while user != "n":
#     user = input("want to play (Y/n)")    
#     user_number= int(input("guess number"))
#     if user_number== number:
#         print("correct")
#     else:
#         print("sorry")

# number = 7
# while True:
#     user = input("want to play (Y/n)")   
#     if user=="n":
#         break
#     user_number= int(input("guess number"))
#     if user_number== number:
#         print("correct")
#     else:
#         print("sorry")        

# friends = ["bob", "rolf","jen", "Anne"]
# for friend in friends:
#     print(f"{friend} is my friend")

# grades = [35,22,88,99]
# total=0
# amount=len(grades)

# for grade in grades:
#     total+=grade
# print(total/amount)

# numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
# evens = []
# for number in numbers:
#     if number%2 == 0:
#         evens.append(number)
# print(evens)

# numbers= [1,3,5]
# doubled = [x*2 for x in numbers]
# print(doubled)

# friends = ["sam", "samanthca", "silly","joe"]
# start_s= [x for x in friends if x.startswith("s")]
# print(start_s)

# friend_ages= {"rolf": 24,"Adam":30,"Anne":27}
# friend_ages["Adam"]=20
# print(friend_ages["Adam"])

# friend = [
#     {"name":"Rolf", "age":24},
#     {"name":"Adam", "age":22},
#     {"name":"Anne", "age":27},
# ]
# print(friend[0]["age"])

# student_attendance={"Rolf":96,"Bob":80,"Anne":100}
# print(student_attendance.items())
# print(student_attendance.values())
# print(sum(student_attendance.values()))
# for student, attendance in student_attendance.items():
#     print(f"{student}:{attendance}%")

# friend_ages = {"rolf":24,"adam":30}
# friend_ages["johnny"]=32
# print(friend_ages)
# print(friend_ages.items())

# t=5,11
# x,y=t
# print(x,y)

# ee, *tail=[1,2,3,4,5]
# print(ee)
# print(tail)

# def hello():
#     print("hello")
# hello()

# def user_age_in_seconds():
#     user_age=int(input("enter age"))
#     age_sec=user_age*365*24*60*60
#     print(f"Your age in sec is {age_sec}")
# user_age_in_seconds()

# friends=["rolf","bob"]
# def add_friend():
#         friends.append("rolf")
# add_friend()
# print(friends)

# def add(x,y=8):
#     result = x+y
#     print(result)
# add(5,3)
# add(5)
# add(x=2)

# def add(x,y):
  
#     return x+y
# result = add(5,3)
# print(result)

# result = "h"*9
# print(result)

# print((lambda x,y: x+y)(5,7))

# def double(x):
#     return x*2
# sequence = [1,3,5,9]
# doubled = [double(x) for x in sequence]
# print(doubled)
# doubleds = list(map(lambda x: x*2, sequence))
# print(doubleds)

# users = [
#     (0, "Bob", "password"),
#     (1, "Rolf", "123"),
#     (2, "Jose", "abcd"),
#     (3, "username", "PW"),
# ]
# username_mapping = {user[1]: user for user in users}
# print(username_mapping)
# print(username_mapping["Bob"])
# username_input = input("Enter you username:  ")
# password_input = input("Enter you password:  ")
# _, username,password = username_mapping[username_input]
# if password_input==password:
#         print("your details are correct")
# else:
#     print("Your details are wrong")

# def multiply(*args):
#     print(args)
#     total =1
#     for arg in args:
#         total = total*arg
#     return total
# print(multiply(1,3,5))

# def add(x,y):
#     return x+y
# num = [3,5]
# print(add(*num))

# def add(x,y):
#     return x+y
# num = {"x":15,"y":25}
# print(add(**num))

# def multiply(*args):
    # total =1
    # for arg in args:
    #     total = total*arg
    # return total
# def apply(*args, operator):
#     if operator == "*":
#         return multiply(*args)
#     elif operator =="+":
#         return sum(args)
#     else:
#         return "no valid operator provided to apply()."
# print(apply(1,3,6,7, operator="*"))

# def named(**kwargs):
#     print(kwargs)
# named(name="Bob, age=25")

# def named(name,age):
#     print(name,age)
# details = {"name": "Bob","age":25}
# named(**details)

# def both(*args, **kwargs):
#     print(args)
#     print(kwargs)
# both(1,3,5, name="bob",age=25)

# student = {"name": "rolf","grades":(89,90,93,78,90)}
# def average(sequence):
#     return sum(sequence)/len(sequence)
# print(average(student["grades"]))

# class Student:
#     def __init__(self, name, grades):
#         self.name=name
#         self.grades=grades
#     def average_grade(self):
#         return sum(self.grades)/len(self.grades)
# student = Student("Bob",(100,100,93,78,91))
# student2 = Student("Rolf",(99,77,93,78,83))
# print(student.name)
# print(student.grades)
# print(student.average_grade())
# print(student2.average_grade())

# class Person:
#     def __init__(self, name, age):
#         self.name=name
#         self.age=age
#     def __str__(self):
#         return f"Person {self.name}, {self.age} years old"
#     def __repr__(self):
#         return f"<Person ('{self.name}', {self.age})>"
# bob=Person("Bob",35)
# print(bob)

# class Store:
#     def __init__(self, name):
#         self.name=name
#         self.items=[]
#     def add_item(self, name, price):
#         self.items.append({"name":name,"price":price})
#     def stock_price(self):      
#             return sum([item['price'] for item in self.items])
#             # total =0 #abode code is the same as this
#             # for x in self.items:
#             #     total = total+x["price"]
#             # return total
# arrowhead=Store("Bob")
# arrowhead.add_item("cheese",12)
# arrowhead.add_item("pie",25)
# print(arrowhead.stock_price())

# class ClassTest:
#     def instance_method(self):
#         print(f"Called instance_method of {self}")
#     @classmethod
#     def class_method(cls):
#         print(f"Called instance_method of {cls}")
#     @staticmethod
#     def static_method():
#         print("Called static_method.")

# test = ClassTest()
# test.instance_method()
# ClassTest.instance_method(test)
# ClassTest.class_method()
# ClassTest.static_method()

# class Book:
#     TYPES=("hardcover","paperback")
#     def __init__(self, name, book_type, wieght):
#         self.name=name
#         self.book_type=book_type
#         self.wieght= wieght
#     def __repr__(self):
#         return f"<Book {self.name},{self.book_type}, wieghing {self.wieght}g>"
#     @classmethod
#     def hardcover(cls,name,page_weight):
#         return cls(name, cls.TYPES[0], page_weight +100)
#     @classmethod
#     def paperback(cls,name,page_weight):
#         return cls(name, cls.TYPES[1], page_weight)
# book = Book.hardcover("Dirty Harry",1500)
# light = Book.paperback("Python 101",600)
# print(book)
# print(light)

# class Store:
#     def __init__(self, name):
#         self.name = name
#         self.items = []

#     def add_item(self, name, price):
#         self.items.append({
#             'name': name,
#             'price': price
#         })
#     def stock_price(self):
#         total = 0
#         for item in self.items:
#             total += item['price']
#         return total
#     @classmethod
#     def franchise(cls, store):
#         # Return another store, with the same name as the argument's name, plus " - franchise"
#         return cls(store.name+" - franchise")
#     @staticmethod
#     def store_details(store):
#         # Return a string representing the argument
#         # It should be in the format 'NAME, total stock price: TOTAL'
#         #return f"{store.name}, total stock price: {store.stock_price()}"
#         return '{}, total stock price: {}'.format(store.name, int(store.stock_price()))
# store = Store("Test")
# store2 = Store("Amazon")
# store2.add_item("Keyboard",160)
# print(Store.franchise(store).name)
# print(Store.franchise(store2).name)
# print(Store.store_details(store))
# print(Store.store_details(store2))

# class Device:
#     def __init__(self, name, connected_by):
#         self.name= name
#         self.connected_by = connected_by
#         self.connected = True
#     def __str__(self):
#         return f"Device {self.name!r}({self.connected_by})"
#     def disconnect(self):
#         self.connected=False 
#         print("Disconnected")
# class Printer(Device):   #Inheritance
#     def __init__(self, name, connected_by, capacity):
#         super().__init__(name, connected_by)
#         self.capacity =capacity
#         self.remaining_pages= capacity
#     def __str__(self):
#         return f"{super().__str__()}({self.remaining_pages} pages remaining)"
#     def print(self, pages):
#         if not self.connected:
#             print("you printer is not connected!")
#             return
#         print(f"Printing {pages} pages.")
#         self.remaining_pages-=pages
# printer = Printer("Printer","USB",500)
# printer.print(20)
# print(printer)
# printer.disconnect()
# printer.print(30)

# class BookShelf:  #Composition
#     def __init__(self, *books):
#         self.books = books
#     def __str__(self):
#         return f"BookShelf with {len(self.books)} books."

# class Book:
#     def __init__(self, name):
#         self.name = name
#     def __str__(self):
#         return f"Book {self.name}."

# book = Book("Harry Potter")
# book1 = Book("Python 101")
# shelf = BookShelf(book, book1)
# print(shelf)

# def list_avg(sequence: list)->:
#     return sum(sequence)/len(sequence)
# list_avg(123)

# def divide(divident, divisor):
#     if divisor ==0:
#         print("Divisor can't be 0")
#     return divident / divisor
# print("experiment.py: ", __name__)

# def divide(divident, divisor):
#     if divisor ==0:
#         raise ZeroDivisionError("Divisor cannot be 0")
 
#     return divident / divisor
# grades = [15,1]
# try:
#     average = divide(sum(grades),len(grades))
       
# except ZeroDivisionError as e:
#     print("There are no grades yet in list")
#     print(e)
# else:
#     print(f"Average is:{average}") # this run if try is succsessful
# finally:  # this always prints
#     print("this always prints")

# class ToomanyPagesReadError(ValueError):
#     pass #creates a new eror type exactly the same as value error but has an name that suggest what the new error is

# def divide(divident, divisor):
#     if divisor ==0:
#         raise ZeroDivisionError("Divisor cannot be 0")
#     return divident / divisor
# def calculate(*values,operator):
#     return operator(*values)
# result = calculate(20,5,operator=divide)
# print(result)
# result1 = calculate(20,0,operator=divide)
# print(result1)

# def search(sequence, expected, finder):
#     for elem in sequence:
#         if finder(elem)==expected:
#             return elem
#     raise RuntimeError(f"Could not find an element with {expected}.")
# friends = [
#     {"name":"Rolf Smith", "age":24},
#     {"name":"Sally Smith", "age":52},
#     {"name":"Billy Smith", "age":12}
# ]
# def get_friend_name(friend):
#     return friend["age"]
# print(search(friends, 52,get_friend_name))    
# print(search(friends, 51,get_friend_name))  

# def get_admin_password():
#     return"1234"
# def make_secure(func): # this is the decorator
#     def secure_function():
#         if user["access_level"]=="admin":
#             return func()
#         else:
#             return f"No admin permisssions for user. "
#     return secure_function
# get_admin_password=make_secure(get_admin_password)
# user={"username": "jose", "access_level":"admin"}
# print(get_admin_password())
# user={"username": "jose", "access_level":"not admin"}
# print(get_admin_password())

# import functools
# def make_secure(func): # this is the decorator
#     @functools.wraps(func)
#     def secure_function():
#         if user["access_level"]=="admin":
#             return func()
#         else:
#             return f"No admin permisssions for user. "
#     return secure_function
# @make_secure
# def get_admin_password():
#     return"1234"
# get_admin_password=make_secure(get_admin_password)
# user={"username": "jose", "access_level":"admin"}
# print(get_admin_password())
# user={"username": "jose", "access_level":"not admin"}
# print(get_admin_password())

# import functools
# def make_secure(func): # this is the decorator
#     @functools.wraps(func)
#     def secure_function(*args,**kwargs):
#         if user["access_level"]=="admin":
#             return func(*args,**kwargs)
#         else:
#             return f"No admin permisssions for user. "
#     return secure_function
# @make_secure
# def get_password(panel):
#     if panel=="admin":
#         return"1234"
#     elif panel == "billing":
#         return "super_secre_password"
# user={"username": "jose", "access_level":"admin"}
# print(get_password("billing"))
# user={"username": "jose", "access_level":"admin"}
# # print(get_password("admin"))

# import functools
# def make_secure(access_level):
#     def decorator(func): # this is the decorator #actual decorator
#         @functools.wraps(func)
#         def secure_function(*args,**kwargs):
#             if user["access_level"]=="admin":
#                 return func(*args,**kwargs)
#             else:
#                 return f"No admin permisssions for user. "
#         return secure_function
#     return decorator
# @make_secure("admin")
# def get_admin_password():
#         return"1234"
# @make_secure("guest")
# def get_dashboard_password():
#         return"user:user_password"
# user={"username": "jose", "access_level":"guest"}
# print(get_admin_password())
# print(get_dashboard_password())
# user={"username": "jenny", "access_level":"admin"}
# print(get_admin_password())
# print(get_dashboard_password())

# a=[]
# b=a
# a.append(35)
# print(id(a))
# print(id(b))
# print(a)
# print(b)


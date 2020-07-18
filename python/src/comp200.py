def hello():
    return "Hello from comp 200"

def email_creator(first_name,last_name):
    return f"{first_name.lower()}.{last_name.lower()}@evoleu.ca"

def canTax(income):
    if income <48535: 
        return income*.15
    elif income<53404: 
        return (income-48535)*.205+7280.25
    elif income<63895: 
        return (income-53404)*.26+8278.395
    elif income<214368: 
        return (income-63895)*.29+11006.06
    else: 
        return (income-214368)*.33+54643.23

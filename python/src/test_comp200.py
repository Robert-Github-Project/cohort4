import comp200 as persist

def test_hello_world():

    assert(persist.hello()=="Hello from comp 200")

def test_email_creator():

    assert(persist.email_creator("Larry","Shumlich")=="larry.shumlich@evoleu.ca")
    assert(persist.email_creator("Heiko","Peters")=="heiko.peters@evoleu.ca")

def test_canTax():
    assert(persist.canTax(10000)==1500)
    assert(persist.canTax(20000)==3000)
    assert(persist.canTax(50000)==7580.575)
    assert(persist.canTax(60000)==9993.355)
    assert(persist.canTax(100000)==21476.51)
    assert(persist.canTax(3000000)==973901.79)

# in command line run "pytest"

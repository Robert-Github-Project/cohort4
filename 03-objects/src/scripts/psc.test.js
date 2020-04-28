import Account from './psc'
// import functions from './psc2'

test('Check the balance', () => {

    const account1 = new Account.Account("Account1", 25)
    expect(account1.name).toBe("Account1");
    expect(account1.balance).toBe(25);
    expect(account1.check()).toBe(25);
    account1.deposit(6);
    expect(account1.check()).toBe(31);
    account1.withdrawl(7);
    expect(account1.check()).toBe(24);
  });

test('check ifNan', () => {

    expect(Account.functions.ifNan("AAA", 2)).toBe("Account AAA has been created with $2");
    expect(Account.functions.ifNan("AAA", "A")).toBe("A is an invalid entry!!!!  Please input a number");

});

test('Check the Account Controller', () => {

    const onlyAccount = new Account.AccountController();

    onlyAccount.addAccount("bb", 30);
    expect(onlyAccount.accountArray[0].name).toBe("bb");
    onlyAccount.addAccount("bb", "gg");
    expect(onlyAccount.accountArray.length).toBe(1);
    onlyAccount.addAccount("cc", 50);
    expect(onlyAccount.accountArray[1].name).toBe("cc");
    onlyAccount.removeAccount("bb")
    expect(onlyAccount.accountArray[0].name).toBe("cc");
    onlyAccount.addAccount("dd", 70);
    onlyAccount.addAccount("ee", 60);
    expect(onlyAccount.total()).toBe(180);
    //console.log(onlyAccount.highestAccount());
    expect(onlyAccount.highestAccount()).toBe("dd");
    // console.log(onlyAccount.lowestAccount());
    expect(onlyAccount.lowestAccount()).toBe("cc");
    expect(onlyAccount.findAccount("cc")).toBe(0);
    expect(onlyAccount.findAccount("ee")).toBe(2);
    expect(onlyAccount.checkAccount("ee")).toBe(60);
    onlyAccount.withdrawlFrom("ee", 30)
    expect(onlyAccount.checkAccount("ee")).toBe(30);
    onlyAccount.depositTo("dd", 40)
    expect(onlyAccount.checkAccount("dd")).toBe(110);
    onlyAccount.removeAccount("ee")

});

test('Check addList', () => {
    document.body.innerHTML =
        `<select  id=idOl>
            <option id="item1">item 1</option>
            <option id="item2">item 2</option>
            <option id="item3">item 3</option>
        </ol>`;
    const ol = document.getElementById("idOl")
    Account.functions.addOption(idOl, "cheque", 222)
    expect(ol.children.length).toBe(4);
    expect(ol.children[1].textContent).toBe("item 2");
    expect(ol.children[3].textContent).toBe("cheque");
    
    Account.functions.addOption(idOl, "cheque", "Not a number");
    //console.log(ol.children[4].textContent);
    expect(ol.children.length).toBe(4);
    
});

test('Check the city class', () => {

    const newCity = new Account.city(1, "Bobsville", 13, 15, 1000)

    expect(newCity.name).toBe("Bobsville");
    expect(newCity.population).toBe(1000);
    expect(newCity.latitude).toBe(13);
    expect(newCity.longitude).toBe(15);
    newCity.movedIn(1000);
    expect(newCity.population).toBe(2000);
    newCity.movedOut(500);
    expect(newCity.population).toBe(1500);
    expect(newCity.howBig()).toBe("Town");
    newCity.movedOut(1402);
    expect(newCity.howBig()).toBe("Hamlet");
    newCity.movedIn(20501);
    expect(newCity.howBig()).toBe("Large Town");
    const secondCity = new Account.city(2,"Tisdale", 167, 16, 100002)
    expect(secondCity.howBig()).toBe("City");
    expect(secondCity.show()).toBe("Tisdale has 100002 people at position 167/16");
});

test('Check the Community ', () => {

    const newComm = new Account.community();

    expect(newComm.createCity("Waco", 20, 20, 20001).name).toBe("Waco");
    expect(newComm.citiesArray[0].name).toBe("Waco");
    newComm.createCity("Salem", 40, 40, 4004);
    expect(newComm.citiesArray[1].name).toBe("Salem");
    expect(newComm.getKeyFromName("Salem")).toBe(2);
    expect(newComm.keyPosition(1)).toBe(0);
    expect(newComm.keyPosition(2)).toBe(1);
    newComm.deleteCity(1);
    expect(newComm.citiesArray.length).toBe(1); 
    expect(newComm.keyPosition(newComm.getKeyFromName("Salem"))).toBe(0);
    newComm.createCity("Cancun", -150, -300, 30000);
    newComm.createCity("Tisdale", 200, 110, 30000);
    newComm.createCity("Quito", 0, 78, 1978376);
    expect(newComm.whichSphere(4)).toBe("Northern Hemisphere"); 
    expect(newComm.whichSphere(3)).toBe("Southern Hemisphere"); 
    expect(newComm.whichSphere(5)).toBe("You are on the Equator");
    expect(newComm.getMostNothern()).toBe("Tisdale");
    expect(newComm.getMostSouthern()).toBe("Cancun");
    expect(newComm.getPopulation()).toBe(2042380);
});

test('Does the createCard function work?', () => {

   const newCity = new Account.city(1, "Bobsville", 13, 15, 1000)
   const group = document.createElement("div");
   const element = Account.functions.createCard(newCity);
   group.appendChild(element);

   expect(element).toBeTruthy();
   expect(group.textContent).toBe("BobsvilleLatitide: 13Longitude: 15Population: 1000");

   expect(group.children[0].children[1].textContent).toBe("Latitide: 13");

}); 
test('Does the createAllCards function work?', () => {
    const newComm = new Account.community();
    newComm.createCity("Bobsville", 13, 15, 1000);
    newComm.createCity("Salem", 40, 40, 4004);
    const group = document.createElement("div");
    const element = Account.functions.createAllCards(newComm.citiesArray);
    group.appendChild(element);
 
    expect(element).toBeTruthy();
    expect(group.textContent).toBe("BobsvilleLatitide: 13Longitude: 15Population: 1000SalemLatitide: 40Longitude: 40Population: 4004");
 
    expect(group.children[0].children[1].children[3].textContent).toBe("Population: 4004");
 
 }); 
 test('Does the createCitySelector function work?', () => {
    const newComm = new Account.community();
    newComm.createCity("Bobsville", 13, 15, 1000);
    newComm.createCity("Salem", 40, 40, 4004);
    const group = document.createElement("select");
    const option = document.createElement("option");
    option.textContent = "bad City";
    const option2 = document.createElement("option");
    option2.textContent = "argva";
    const option3 = document.createElement("option");
    option3.textContent = "agrar";
    group.appendChild(option);
    const element = Account.functions.createSelectCity(group, newComm.citiesArray,group);
    console.log(element.children[0].textContent);
    console.log(element.children[1].textContent);
    // group.appendChild(element);
    console.log(group.children[0].textContent);
    expect(element).toBeTruthy();
    expect(element.children[0].textContent).toBe("Bobsville");
    expect(element.children[0].id).toBe("1");
    expect(element.children[1].textContent).toBe("Salem");
    expect(element.children[1].id).toBe("2");
    //expect(group.children[0].children[1].children[3].textContent).toBe("Population: 4004");
 
 }); 
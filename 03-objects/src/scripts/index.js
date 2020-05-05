import Account from './psc.js'
import functions from './fetch.js'

const community = new Account.community();
// ------------setting up the server-----------
let cityOutput = document.getElementById("idContainer");
let data = ""
const url = 'http://localhost:5000/';
const cities = [
    { "key": 1, "name": "Calgary", "latitude": 51.05, "longitude": -114.05, "population": 1300000 },
    { "key": 2, "name": "Edmonton", "latitude": 53.55, "longitude": -113.49, "population": 1000000 },
    { "key": 3, "name": "Red Deer", "latitude": 52.28, "longitude": -113.81, "population": 250000 }
];

// Check that the server is running and clear any data
window.addEventListener('DOMContentLoaded', async () => {
    data = await functions.postData(url + 'all');
    community.fromserver(data)
    //-----add all cards   
    cityOutput.appendChild(Account.functions.createAllCards(community.citiesArray));
    //--------add cities to selector
    const citySelect = document.getElementById("idSelectCity");
    Account.functions.createSelectCity(citySelect, community.citiesArray);
    console.log(data);
});
idAddAlberta.addEventListener('click', (async () => {
    data = await functions.postData(url + 'add', cities[0]);
    data = await functions.postData(url + 'add', cities[1]);
    data = await functions.postData(url + 'add', cities[2]);

}));
idNukeServer.addEventListener('click', (async () => {
    data = await functions.postData(url + 'clear');
}));

idCreateCity.addEventListener('click', (async () => {
    //-------delete all cards
    let container = document.getElementById('idContainer');
    container.innerHTML = "";
    console.log("click")
    community.createCity(idCityName.value, Number(idLatitude.value), Number(idLongitude.value), Number(idPopulation.value));
    //-----add all cards    
    cityOutput.appendChild(Account.functions.createAllCards(community.citiesArray));
    //--------add cities to selector
    const citySelect = document.getElementById("idSelectCity");
    Account.functions.createSelectCity(citySelect, community.citiesArray);
    console.log(citySelect)
    // citySelect.appendChild(optionsNode)
    console.log(community.citiesArray)
    console.log()
    data = await functions.postData(url + 'add', community.citiesArray[community.keyPosition(community.getKeyFromName(idCityName.value))]);
}));
//onselectionchange
// how to get key from selector
// let selectedCity = document.getElementById("idSelectCity");
// let selectedKey=selectedCity.options[selectedCity.selectedIndex].id
idSelectCity.addEventListener('change', ((e) => {
    let selectedCity = document.getElementById("idSelectCity");
    let selectedKey = selectedCity.options[selectedCity.selectedIndex].id
    let selectOutput = document.getElementById("idMessage4");
    selectOutput.textContent = selectedCity.value + " is in the " + community.whichSphere(selectedKey);

}));
idTotalPopulation.addEventListener('click', (() => {

    let outputTotal = document.getElementById("idMessage5");
    outputTotal.textContent = "Total Population of all cities is: " + community.getPopulation();

}));
idGetNorthern.addEventListener('click', (() => {

    let outputTotal = document.getElementById("idMessage5");
    outputTotal.textContent = "The most Northern City is: " + community.getMostNothern();

}));
idGetSouthern.addEventListener('click', (() => {

    let outputTotal = document.getElementById("idMessage5");
    outputTotal.textContent = "The most Southern City is: " + community.getMostSouthern();

}));
idGetSouthern.addEventListener('click', (() => {

    let outputTotal = document.getElementById("idMessage5");
    outputTotal.textContent = "The most Southern City is: " + community.getMostSouthern();

}));
idHowBig.addEventListener('click', (() => {
    let selectedCity = document.getElementById("idSelectCity");
    let selectedKey = selectedCity.options[selectedCity.selectedIndex].id

    let selectOutput = document.getElementById("idMessage4");

    let howBig = community.citiesArray[community.keyPosition(selectedKey)].howBig()
    selectOutput.textContent = selectedCity.value + " is a " + howBig;
}));
idMovedInButton.addEventListener('click', (() => {
    let selectedCity = document.getElementById("idSelectCity");
    let selectedKey = selectedCity.options[selectedCity.selectedIndex].id
    let populationMovingIn = Number(document.getElementById("idMovedInInput").value)
    let selectOutput = document.getElementById("idMessage4");
    selectOutput.textContent = populationMovingIn + " people moved into " + selectedCity.value;
    community.citiesArray[community.keyPosition(selectedKey)].movedIn(populationMovingIn)
    //-------delete all cards
    let container = document.getElementById('idContainer');
    container.innerHTML = "";
    //-----add all cards
    cityOutput.appendChild(Account.functions.createAllCards(community.citiesArray));
}));
idMovedOutButton.addEventListener('click', (async() => {
    let selectedCity = document.getElementById("idSelectCity");
    let selectedKey = selectedCity.options[selectedCity.selectedIndex].id
    let populationMovingOut = Number(document.getElementById("idMovedOutInput").value)
    let selectOutput = document.getElementById("idMessage4");
    selectOutput.textContent = populationMovingOut + " people moved into " + selectedCity.value;
    community.citiesArray[community.keyPosition(selectedKey)].movedOut(populationMovingOut)
    //-------delete all cards-----
    let container = document.getElementById('idContainer');
    container.innerHTML = "";
    //--------add all cards-------
    cityOutput.appendChild(Account.functions.createAllCards(community.citiesArray));
    //--------update server-------
    data = await functions.postData(url + 'update', {key:1, population:3});
}));
idDeleteCity.addEventListener('click', (async () => {
    let selectedCity = document.getElementById("idSelectCity");
    let selectedKey = selectedCity.options[selectedCity.selectedIndex].id;
    console.log(selectedKey);
    //--------delete from server
    data = await functions.postData(url + 'delete', {key:Number(selectedKey)});   
    let selectOutput = document.getElementById("idMessage4");
    selectOutput.textContent = selectedCity.value + " has been deleted";
    community.deleteCity(selectedKey);
    //-------delete all cards
    let container = document.getElementById('idContainer');
    container.innerHTML = "";
    //-----add all cards
    cityOutput.appendChild(Account.functions.createAllCards(community.citiesArray));
    //--------redo cities selector
    const citySelect = document.getElementById("idSelectCity");
    Account.functions.createSelectCity(citySelect, community.citiesArray);
}));
//----------------------  Bank account creator----------------------------

const controlAccount = new Account.AccountController();

idCreateAccount.addEventListener('click', (() => {
    console.log("click")
    let inputAccountName = document.getElementById("idInputAccountName").value;
    let inputAccountBalance = Number(document.getElementById("idInputAccountBalance").value);

    controlAccount.addAccount(inputAccountName, inputAccountBalance);
    console.log("Account Name: " + inputAccountName + "  Account Balance: " + inputAccountBalance);
    console.log(controlAccount.accountArray);
    let output1 = document.getElementById("idMessage1");
    output1.textContent = Account.functions.ifNan(inputAccountName, document.getElementById("idInputAccountBalance").value);

    const select = document.getElementById("idSelectAccount")
    Account.functions.addOption(select, inputAccountName, inputAccountBalance)

}));


idDeposit.addEventListener('click', (() => {
    let deposit = Number(document.getElementById("idInput").value);
    let selectInput = document.getElementById("idSelectAccount").value;
    let accountNumber = controlAccount.findAccount(selectInput);
    let selectedAccount = controlAccount.accountArray[accountNumber];
    selectedAccount.deposit(deposit);
    console.log("Account Name: " + selectedAccount.name + "  Account Balance: " + selectedAccount.balance);
    let output1 = document.getElementById("idMessage2");
    output1.textContent = "$" + deposit + " has been deposited";
}));

idWithdrawl.addEventListener('click', (() => {
    let withdrawl = Number(document.getElementById("idInput").value);
    let selectInput = document.getElementById("idSelectAccount").value;
    let accountNumber = controlAccount.findAccount(selectInput);
    let selectedAccount = controlAccount.accountArray[accountNumber];
    selectedAccount.withdrawl(withdrawl);
    console.log("Account Name: " + selectedAccount.name + "  Account Balance: " + selectedAccount.balance);


    let output1 = document.getElementById("idMessage2");
    output1.textContent = "$" + withdrawl + " has been withdrawn";
}));

idCheck.addEventListener('click', (() => {
    let selectInput = document.getElementById("idSelectAccount").value;
    let accountNumber = controlAccount.findAccount(selectInput);
    let selectedAccount = controlAccount.accountArray[accountNumber];
    selectedAccount.check();
    let output1 = document.getElementById("idMessage2");
    output1.textContent = "Account " + selectedAccount.name + " has a balance of $" + selectedAccount.balance;
    console.log("Account Name: " + selectedAccount.name + "  Account Balance: " + selectedAccount.balance);
}));

idRemove.addEventListener('click', (() => {
    let selectInput = document.getElementById("idSelectAccount").value;
    let accountNumber = controlAccount.findAccount(selectInput);
    console.log("Accound Number is " + accountNumber);
    let selector = document.getElementById("idSelectAccount");
    selector.children[accountNumber + 1].remove()
    controlAccount.removeAccount(selectInput);
    console.log(controlAccount.accountArray);
    let output1 = document.getElementById("idMessage2");
    output1.textContent = "Account " + selectInput + " has been deleted";
}));

idTotal.addEventListener('click', (() => {
    let total = controlAccount.total()
    let output3 = document.getElementById("idMessage3");
    output3.textContent = "Total of all accounts is $" + total;
}));

idHighest.addEventListener('click', (() => {
    console.log("click");
    let highest = controlAccount.highestAccount();
    let accountNumber = controlAccount.findAccount(highest);
    console.log(accountNumber);
    let balance = controlAccount.accountArray[accountNumber].balance;
    let output3 = document.getElementById("idMessage3");
    output3.textContent = "Largest account is " + highest + " with $" + balance;
}));

idLowest.addEventListener('click', (() => {
    console.log("click");
    let lowest = controlAccount.lowestAccount();
    let accountNumber = controlAccount.findAccount(lowest);
    console.log(accountNumber);
    let balance = controlAccount.accountArray[accountNumber].balance;
    let output3 = document.getElementById("idMessage3");
    output3.textContent = "Smallest account is " + lowest + " with $" + balance;
}));

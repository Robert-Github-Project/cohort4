import Account from './psc.js'
import functions from './fetch.js'

const community = new Account.community();
// ------------setting up the server-----------
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
    Account.functions.createAllCards(community.citiesArray, idContainer);
    //--------add cities to selector
    Account.functions.createSelectCity(idSelectCity, community.citiesArray);
    console.log(data);
});
idAddAlberta.addEventListener('click', (async () => {
    data = await functions.postData(url + 'add', cities[0]);
    data = await functions.postData(url + 'add', cities[1]);
    data = await functions.postData(url + 'add', cities[2]);
    idContainer.innerHTML = "";
    Account.functions.createAllCards(community.citiesArray, idContainer);
    Account.functions.createSelectCity(idSelectCity, community.citiesArray);

}));
idNukeServer.addEventListener('click', (async () => {
    data = await functions.postData(url + 'clear');
}));

idCreateCity.addEventListener('click', (async () => {
    //-------delete all cards
    idContainer.innerHTML = "";
    console.log("click")
    community.createCity(idCityName.value, Number(idLatitude.value), Number(idLongitude.value), Number(idPopulation.value));
    //-----add all cards  
    Account.functions.createAllCards(community.citiesArray, idContainer);
    //--------add cities to selector
    Account.functions.createSelectCity(idSelectCity, community.citiesArray);
    // citySelect.appendChild(optionsNode)
    console.log(community.citiesArray)
    console.log()
    data = await functions.postData(url + 'add', community.citiesArray[community.keyPosition(community.getKeyFromName(idCityName.value))]);
}));
idSelectCity.addEventListener('change', ((e) => {
    let selectedKey = idSelectCity.options[idSelectCity.selectedIndex].id
    idMessage4.textContent = idSelectCity.value + " is in the " + community.whichSphere(selectedKey);
}));
idTotalPopulation.addEventListener('click', (() => {
    idMessage5.textContent = "Total Population of all cities is: " + community.getPopulation();
}));
idGetNorthern.addEventListener('click', (() => {
    idMessage5.textContent = "The most Northern City is: " + community.getMostNothern();
}));
idGetSouthern.addEventListener('click', (() => {
    idMessage5.textContent = "The most Southern City is: " + community.getMostSouthern();
}));
idHowBig.addEventListener('click', (() => {
    let selectedKey = idSelectCity.options[idSelectCity.selectedIndex].id
    let howBig = community.citiesArray[community.keyPosition(selectedKey)].howBig()
    idMessage4.textContent = idSelectCity.value + " is a " + howBig;
}));
idMovedInButton.addEventListener('click', (async () => {
    let selectedKey = idSelectCity.options[idSelectCity.selectedIndex].id
    let populationMovingIn = Number(document.getElementById("idMovedInInput").value)
     idMessage4.textContent = populationMovingIn + " people moved into " + idSelectCity.value;
    community.citiesArray[community.keyPosition(selectedKey)].movedIn(populationMovingIn)
    //-------delete all cards
    idContainer.innerHTML = "";
    //-----add all cards
    Account.functions.createAllCards(community.citiesArray, idContainer);
    data = await functions.postData(url + 'update', community.citiesArray[community.keyPosition(Number(selectedKey))]);
}));
idMovedOutButton.addEventListener('click', (async () => {
    let selectedKey = idSelectCity.options[idSelectCity.selectedIndex].id
    let populationMovingOut = Number(document.getElementById("idMovedOutInput").value)
    idMessage4.textContent = populationMovingOut + " people moved out of " + idSelectCity.value;
    community.citiesArray[community.keyPosition(selectedKey)].movedOut(populationMovingOut)
    //-------delete all cards-----
    idContainer.innerHTML = "";
    //--------add all cards-------
    Account.functions.createAllCards(community.citiesArray, idContainer);
    //--------update server-------
    data = await functions.postData(url + 'update', community.citiesArray[community.keyPosition(Number(selectedKey))]);
}));
idDeleteCity.addEventListener('click', (async () => {
    let selectedKey = idSelectCity.options[idSelectCity.selectedIndex].id;
    //--------delete from server
    data = await functions.postData(url + 'delete', { key: Number(selectedKey) });
    idMessage4.textContent = idSelectCity.value + " has been deleted";
    community.deleteCity(selectedKey);
    //-------delete all cards
    idContainer.innerHTML = "";
    //-----add all cards
    Account.functions.createAllCards(community.citiesArray, idContainer);
    //--------redo cities selector
    Account.functions.createSelectCity(idSelectCity, community.citiesArray);
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
    let output1 = document.getElementById("idMessage2");
    output1.textContent = "$" + deposit + " has been deposited";
}));
idWithdrawl.addEventListener('click', (() => {
    let withdrawl = Number(document.getElementById("idInput").value);
    let selectInput = document.getElementById("idSelectAccount").value;
    let accountNumber = controlAccount.findAccount(selectInput);
    let selectedAccount = controlAccount.accountArray[accountNumber];
    selectedAccount.withdrawl(withdrawl);
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
}));
idRemove.addEventListener('click', (() => {
    let selectInput = document.getElementById("idSelectAccount").value;
    let accountNumber = controlAccount.findAccount(selectInput);
    let selector = document.getElementById("idSelectAccount");
    selector.children[accountNumber + 1].remove()
    controlAccount.removeAccount(selectInput);
    let output1 = document.getElementById("idMessage2");
    output1.textContent = "Account " + selectInput + " has been deleted";
}));
idTotal.addEventListener('click', (() => {
    let total = controlAccount.total()
    let output3 = document.getElementById("idMessage3");
    output3.textContent = "Total of all accounts is $" + total;
}));
idHighest.addEventListener('click', (() => {
    let highest = controlAccount.highestAccount();
    let accountNumber = controlAccount.findAccount(highest);
    let balance = controlAccount.accountArray[accountNumber].balance;
    let output3 = document.getElementById("idMessage3");
    output3.textContent = "Largest account is " + highest + " with $" + balance;
}));
idLowest.addEventListener('click', (() => {
    let lowest = controlAccount.lowestAccount();
    let accountNumber = controlAccount.findAccount(lowest);
    let balance = controlAccount.accountArray[accountNumber].balance;
    let output3 = document.getElementById("idMessage3");
    output3.textContent = "Smallest account is " + lowest + " with $" + balance;
}));

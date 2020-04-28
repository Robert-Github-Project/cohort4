import Account from './psc.js'
import functions from './fetch.js'

const community = new Account.community();
// ------------setting up the server-----------
const url = 'http://localhost:5000/';
const cities = [
    {
        "1": { "key": 1, "city": "Calgary", "lat": 51.05, "long": -114.05 },
        "2": { "key": 2, "city": "Edmonton", "lat": 53.55, "long": -113.49 },
        "3": { "key": 3, "city": "Red Deer", "lat": 52.28, "long": -113.81 }
    }
];


// Check that the server is running and clear any data
window.addEventListener('DOMContentLoaded', async () => {
let data = await functions.postData(url + 'clear');
});
// data = await postData(url + 'all');
// console.log(data.status)
// data =  functions.postData(url + 'all');
// console.log(data.status)

// // data = await postData(url + 'add', database[0]);
// // console.log(data.status)

idCreateCity.addEventListener('click', (async() => {
    //-------delete all cards
    let container = document.getElementById('idContainer');
    container.innerHTML = "";

    console.log("click")
    let inputCityName = document.getElementById("idCityName").value;
    let inputLatitude = Number(document.getElementById("idLatitude").value);
    let inputLongitude = document.getElementById("idLongitude").value;
    let inputPopulation = Number(document.getElementById("idPopulation").value);
    //-----add all cards
    let cityOutput = document.getElementById("idContainer");
    community.createCity(inputCityName, inputLatitude, inputLongitude, inputPopulation);
    cityOutput.appendChild(Account.functions.createAllCards(community.citiesArray));
    //--------add cities to selector
    const citySelect=document.getElementById("idSelectCity");
    Account.functions.createSelectCity(citySelect,community.citiesArray);
    console.log(citySelect)
    // citySelect.appendChild(optionsNode)
    console.log(community.citiesArray)

}));
//onselectionchange
// how to get key from selector
// let selectedCity = document.getElementById("idSelectCity");
// let selectedKey=selectedCity.options[selectedCity.selectedIndex].id
idSelectCity.addEventListener('click', (() => {
console.log("select Click");
    let selectedCity = document.getElementById("idSelectCity");
    let selectedKey=selectedCity.options[selectedCity.selectedIndex].id
    console.log(selectedKey);
    let selectOutput = document.getElementById("idMessage4");
    selectOutput.textContent = "Total Population of all cities is: "+community.whichSphere(selectedKey);

}));
idTotalPopulation.addEventListener('click', (() => {

    let outputTotal = document.getElementById("idMessage4");
    outputTotal.textContent = "Total Population of all cities is: " + community.getPopulation();

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

import Account from './psc.js'
import functions from './psc2.js'


let account1 =""
    
idCreateAccount.addEventListener('click', (() =>   {

    let inputAccountName = document.getElementById("idInputAccountName").value;
    let inputAccountBalance = Number(document.getElementById("idInputAccountBalance").value);
    account1 = new Account.Account(inputAccountName,inputAccountBalance)
    console.log("Account Name: " + account1.name +"  Account Balance: " + account1.balance)
    let output1 = document.getElementById("idMessage1");
    console.log(inputAccountBalance)
    output1.textContent = functions.ifNan(inputAccountName,document.getElementById("idInputAccountBalance").value);
    //output1.textContent = "Account "+ inputAccountName + " has been created with $" + inputAccountBalance;
    }));  


idDeposit.addEventListener('click', (() =>   {
    let deposit = Number(document.getElementById("idInput").value);
    account1.deposit(deposit);
    console.log("Account Name: " + account1.name +"  Account Balance: " + account1.balance);

    let output1 = document.getElementById("idMessage2");
    output1.textContent = "$"+deposit +" has been deposited";
    }));  

idWithdrawl.addEventListener('click', (() =>   {
    let withdrawl = Number(document.getElementById("idInput").value);
    account1.withdrawl(withdrawl);
    console.log("Account Name: " + account1.name +"  Account Balance: " + account1.balance);
 

    let output1 = document.getElementById("idMessage2");
    output1.textContent = "$"+withdrawl +" has been withdrawn";
    }));  

idCheck.addEventListener('click', (() =>   {

    account1.check();
    let output1 = document.getElementById("idMessage2");
    output1.textContent ="Account " + account1.name +" has a balance of $" + account1.balance;
    console.log("Account Name: " + account1.name +"  Account Balance: " + account1.balance);
    }));  
    
        
    
        
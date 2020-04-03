import Account from './psc'
import functions from './psc2'

test('Check the balance', () => {


    const account1 = new Account.Account("Account1",25)
        expect(account1.name).toBe("Account1");
        expect(account1.balance).toBe(25); 
        expect(account1.check()).toBe(25); 
        account1.deposit(6);
        expect(account1.check()).toBe(31); 
        account1.withdrawl(7);
        expect(account1.check()).toBe(24); 
 
});

test('check ifNan', () => {

        expect(functions.ifNan("AAA",2)).toBe("Account AAA has been created with $2");
        expect(functions.ifNan("AAA","A")).toBe("A is an invalid entry!!!!  Please input a number");

 
});



test('Check the Account Controller', () => {

         const onlyAccount = new Account.AccountController();

       onlyAccount.addAccount("bb",30);
       expect(onlyAccount.accountArray[0].name).toBe("bb"); 
       onlyAccount.addAccount("cc",50);
       expect(onlyAccount.accountArray[1].name).toBe("cc"); 
       onlyAccount.removeAccount("bb")
       expect(onlyAccount.accountArray[0].name).toBe("cc");        
       onlyAccount.addAccount("dd",70);
       onlyAccount.addAccount("ee",60);
       expect(onlyAccount.total()).toBe(180); 
       console.log(onlyAccount.highestAccount());
       expect(onlyAccount.highestAccount()).toBe("dd"); 
       console.log(onlyAccount.lowestAccount());
       expect(onlyAccount.lowestAccount()).toBe("cc"); 
       expect(onlyAccount.findAccount("cc")).toBe(0);        
       expect(onlyAccount.findAccount("ee")).toBe(2); 
       expect(onlyAccount.checkAccount("ee")).toBe(60); 
       onlyAccount.withdrawlFrom("ee",30)
       expect(onlyAccount.checkAccount("ee")).toBe(30); 
       onlyAccount.depositTo("dd",40)
       expect(onlyAccount.checkAccount("dd")).toBe(110); 
       onlyAccount.removeAccount("ee")

console.log(onlyAccount.accountArray)
});

test('Check addList', () => {
        document.body.innerHTML =        
        `<select  id=idOl>
            <option id="item1">item 1</option>
            <option id="item2">item 2</option>
            <option id="item3">item 3</option>
        </ol>`;
        const ol=document.getElementById("idOl")
        functions.addOption(idOl,"cheque")
     
    expect(ol.children.length).toBe(4);
    expect(ol.children[1].textContent).toBe("item 2");
    expect(ol.children[3].textContent).toBe("cheque");
     
    });
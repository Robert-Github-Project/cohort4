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

console.log("test")

        expect(functions.ifNan("AAA",2)).toBe("Account AAA has been created with $2");
        expect(functions.ifNan("AAA","A")).toBe("A is an invalid entry!!!!  Please input a number");

 
});



test('Check the Account Controller', () => {


        const onlyAccount = new Account.AccountController();


       console.log(onlyAccount.accountArray);
       onlyAccount.addAccount("bb",30);
       expect(onlyAccount.accountArray[0].name).toBe("bb"); 
       onlyAccount.addAccount("cc",50);
       expect(onlyAccount.accountArray[1].name).toBe("cc"); 
       console.log(onlyAccount.accountArray);
       console.log(onlyAccount.accountArray[0].name);
       onlyAccount.deleteAccount("bb")
       expect(onlyAccount.accountArray[0].name).toBe("cc"); 
       console.log(onlyAccount.accountArray[0].name);
       onlyAccount.addAccount("dd",70);
       expect(onlyAccount.total()).toBe(120); 

       expect(onlyAccount.highestAccount()).toBe("dd"); 

        //     expect(account1.name).toBe("Account1");
    
        //     expect(account1.balance).toBe(25); 
        //     expect(account1.check()).toBe(25); 
        //     account1.deposit(6);
        //     expect(account1.check()).toBe(31); 
        //     account1.withdrawl(7);
        //     expect(account1.check()).toBe(24); 
     
});
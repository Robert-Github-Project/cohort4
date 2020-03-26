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



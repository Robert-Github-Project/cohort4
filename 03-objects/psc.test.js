import Account from './psc'


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


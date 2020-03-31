
    class Account {

        constructor(name, balance) {
            this.name = name;
            this.balance = balance;
        }
        deposit(num) {
            this.balance = this.balance +num;
        }
        withdrawl(num) {
          this.balance = this.balance -num;
      }
        check() {
      
            return this.balance
        }
    
    }
    class AccountController {

        constructor() {
            this.accountArray= [];
        }
        addAccount(name,bal) {
            this.accountArray.push(new Account(name,bal));
        }

        findAccount(name) {
            for (let i = 0; i < this.accountArray.length; i++) {
                if (name == this.accountArray[i].name) {
                    return i
                }
            }
             
        }  
        checkAccount (name) {
            return this.accountArray[this.findAccount(name)].balance;
        }   
        depositTo (name,num) {
            this.accountArray[this.findAccount(name)].deposit(num);
        }  
        withdrawlFrom (name,num) {
            this.accountArray[this.findAccount(name)].withdrawl(num);
        }
        removeAccount(name) {
            this.accountArray.splice(this.findAccount(name), 1);
        }
        total() {
            let total = 0
            for (let i = 0; i < this.accountArray.length; i++) {
               total = total + this.accountArray[i].balance
        }
        return total
    }
        highestAccount() {
            let highest=0;
            for (let i = 0; i < this.accountArray.length; i++) {
                if ( this.accountArray[highest].balance<this.accountArray[i].balance) {
                    highest=[i];
            }
        }
        return this.accountArray[highest].name
    }
        lowestAccount() {
            let lowest=0;
            for (let i = 0; i < this.accountArray.length; i++) {
                if ( this.accountArray[lowest].balance>this.accountArray[i].balance) {
                    lowest=[i];
        }
    }
    return this.accountArray[lowest].name
}
  }
export default {Account, AccountController};

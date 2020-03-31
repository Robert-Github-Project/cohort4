
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
        deleteAccount(name) {
            for (let i = 0; i < this.accountArray.length; i++) {
                if (name == this.accountArray[i].name) {
                    this.accountArray.splice(i, 1)
                }
            }
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
                if ( this.accountArray[highest]<this.accountArray[i]) {
                    highest=[i]
            }
        }
        return this.accountArray[highest].name
    }
  
  }
export default {Account, AccountController};

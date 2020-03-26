
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
export default {Account, AccountController};
// export { Account, AccountController };

class Account {

    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }
    deposit(num) {
        this.balance = this.balance + num;
    }
    withdrawl(num) {
        this.balance = this.balance - num;
    }
    check() {

        return this.balance
    }

}
class AccountController {

    constructor() {
        this.accountArray = [];
    }
    addAccount(name, bal) {
        this.accountArray.push(new Account(name, bal));
    }

    findAccount(name) {
        for (let i = 0; i < this.accountArray.length; i++) {
            if (name == this.accountArray[i].name) {
                return i
            }
        }

    }
    checkAccount(name) {
        return this.accountArray[this.findAccount(name)].balance;
    }
    depositTo(name, num) {
        this.accountArray[this.findAccount(name)].deposit(num);
    }
    withdrawlFrom(name, num) {
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
        let highest = 0;
        for (let i = 0; i < this.accountArray.length; i++) {
            if (this.accountArray[highest].balance < this.accountArray[i].balance) {
                highest = [i];
            }
        }
        return this.accountArray[highest].name
    }
    lowestAccount() {
        let lowest = 0;
        for (let i = 0; i < this.accountArray.length; i++) {
            if (this.accountArray[lowest].balance > this.accountArray[i].balance) {
                lowest = [i];
            }
        }
        return this.accountArray[lowest].name
    }
}
class city {

    constructor( name, latitude, longitude, population) {
        
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.population = population;
        //add key
    }
    movedIn(num) {
         this.population = this.population + num;
     }
     movedOut(num) {
        this.population = this.population - num;
    }
    howBig() {

        if (this.population < 101) return "Hamlet";
        if (this.population < 1001) return "Village";
        if (this.population < 20001) return "Town";
        if (this.population < 100001) return "Large Town";
        return "City";
    }

}
class community {

    constructor() {
        this.cities = {};
        this.key=1
        //change to counter
    }
    createCity(name, latitude, longitude, population) {
        let cityKey = this.key++
        let AAA= new city(name, latitude, longitude, population);
        this.cities[cityKey]=AAA;
    }

    getCity(theKey) {
        return this.cities[theKey];
    }

    deleteCity(key) {
        delete this.cities[key];
    }

    // findAccount(name) {
    //     for (let i = 0; i < this.accountArray.length; i++) {
    //         if (name == this.accountArray[i].name) {
    //             return i
    //         }
    //     }

    //  }
    // checkAccount(name) {
    //     return this.accountArray[this.findAccount(name)].balance;
    // }
    // depositTo(name, num) {
    //     this.accountArray[this.findAccount(name)].deposit(num);
    // }
    // withdrawlFrom(name, num) {
    //     this.accountArray[this.findAccount(name)].withdrawl(num);
    // }

    // total() {
    //     let total = 0
    //     for (let i = 0; i < this.accountArray.length; i++) {
    //         total = total + this.accountArray[i].balance
    //     }
    //     return total
    // }
    // highestAccount() {
    //     let highest = 0;
    //     for (let i = 0; i < this.accountArray.length; i++) {
    //         if (this.accountArray[highest].balance < this.accountArray[i].balance) {
    //             highest = [i];
    //         }
    //     }
    //     return this.accountArray[highest].name
    // }
    // lowestAccount() {
    //     let lowest = 0;
    //     for (let i = 0; i < this.accountArray.length; i++) {
    //         if (this.accountArray[lowest].balance > this.accountArray[i].balance) {
    //             lowest = [i];
    //         }
    //     }
    //     return this.accountArray[lowest].name
    // }
}
export default { Account, AccountController, city, community };

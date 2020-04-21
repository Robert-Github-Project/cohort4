
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

    constructor(key, name, latitude, longitude, population) {

        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.population = population;
        this.key = key
    }
    show() {
        return this.name + " has " + this.population + " people at position " + this.latitude + "/" + this.longitude;
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
        this.citiesArray = [];
        this.counter = 1

    }
    createCity(name, latitude, longitude, population) {
        let cityKey = this.counter++
        this.citiesArray.push(new city(cityKey, name, latitude, longitude, population))
        // let AAA= new city(cityKey, name, latitude, longitude, population);
        // this.citiesArray[cityKey]=AAA;
    }
    getKeyFromName(name) {

        for (let i = 0; i < this.citiesArray.length; i++) {
            if (name == this.citiesArray[i].name) {
                return this.citiesArray[i].key
            }
        }

    }
    keyPosition(theKey) {

        for (let i = 0; i < this.citiesArray.length; i++) {
            if (theKey == this.citiesArray[i].key) {
                return i
            }
        }
    }
    deleteCity(key) {
        // delete this.citiesArray[key];
        this.citiesArray.splice(this.keyPosition(key), 1);
    }
    whichSphere(name) {
        if (this.citiesArray[this.keyPosition(this.getKeyFromName(name))].latitude > 0) {
            return "Northern Hemisphere"
        }
        if (this.citiesArray[this.keyPosition(this.getKeyFromName(name))].latitude < 0) {
            return "Southern Hemisphere"
        }
        return "You are on the Equator"
    }
    getMostNothern() {
        let N = ""
        let I = ""
        for (let i = 0; i < this.citiesArray.length; i++) {
            if (this.citiesArray[i].latitude > N) {
                N = this.citiesArray[i].latitude
                I=i
            }
        }
        return this.citiesArray[I].name
    }
    getMostSouthern() {
        let S = ""
        let I = ""
        for (let i = 0; i < this.citiesArray.length; i++) {
            if (this.citiesArray[i].latitude < S) {
                S = this.citiesArray[i].latitude
                I=i
            }
        }
        return this.citiesArray[I].name
    }
    getPopulation() {
        let total = 0
        for (let i = 0; i < this.citiesArray.length; i++) {
            total = total + this.citiesArray[i].population
        }
        return total
    }
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


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
    addAccount(name, balance) {
        if (isNaN(balance) === false) {
            this.accountArray.push(new Account(name, balance));
        }
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
        return this.citiesArray[this.keyPosition(cityKey)]
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
                I = i
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
                I = i
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
}

const functions = {
    ifNan: (inputAccountName, inputAccountBalance) => {
        if (isNaN(inputAccountBalance) === false) {
            return "Account " + inputAccountName + " has been created with $" + inputAccountBalance;
        } else return inputAccountBalance + " is an invalid entry!!!!  Please input a number";
    },
    addOption: (parent, accountName, balance) => {
        if (isNaN(balance) === false) {
            const option = document.createElement("option");
            option.textContent = accountName;
            parent.appendChild(option);
        }
    },
    createCard: (city) => {

        const div = document.createElement('div');
        div.setAttribute('class', 'card')

        const cityName = document.createElement('p');
        cityName.setAttribute('class', 'idP1')
        cityName.appendChild(document.createTextNode(city.name));
        div.appendChild(cityName);


        const lat = document.createElement('p');
        lat.appendChild(document.createTextNode(`Latitide: ${city.latitude}`));
        div.appendChild(lat);


        const long = document.createElement('p');
        long.appendChild(document.createTextNode(`Longitude: ${city.longitude}`));
        div.appendChild(long);


        const pop = document.createElement('p');
        pop.appendChild(document.createTextNode(`Population: ${city.population}`));
        div.appendChild(pop);


        div.classList.add('card');

        return div;
    },
    createAllCards: (array) => {
        const parentNode = document.createElement('div');

        for (let i = 0; i < array.length; i++) {
            parentNode.appendChild(functions.createCard(array[i]));
        }
        return parentNode;
    }
}
export default { Account, AccountController, city, community, functions };

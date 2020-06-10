import React from 'react';
// import logo from './logo.svg';

function Account(props) {
    return (
        <div className="card">
            <h3>Account:{props.name}</h3>
            <h3>Balance:{props.balance}</h3>
            <button>People Moving in</button>
            <button>People Moving out</button>
        </div>
    );
}

class Accounts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stepNumber: 0,
            xIsNext: true
        };
    }

    render() {
    return (
        <div className="banker">
          <p className="idP1">Banking Basics</p> 
          <p>Please add a new account good sir/madam.</p>  
           <input id="idInputAccountName"/>         Account Name<br/>
           <input id="idInputAccountBalance"/> Initial Account Balance<br/><br/>
           <button id="idCreateAccount">Create Account</button>
           <p id="idMessage1"> ---------------------- </p>
           <p class="line"></p>
            <Account name ="savings" balance = "300"/>
        </div>
    );
}
}
export default Accounts;
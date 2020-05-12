import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
// import OddComponent from './components/OddComponent';
// import EvenComponent from './components/EvenComponent';

class App extends Component {
  constructor() {
    super();
    this.counter = 21;
    this.state = {
      myState: "TBD"
    };
  }
  onPushMe = () => {
    console.log("You pushed me");
    this.counter = this.counter+1;
    this.setState({
      myState: "now:" + this.counter
    });
  }

  render () {
    const whatever ="Whatever!!!!"
    const onPush=this.onPushMe
  return (
    
    <div className="App">
            <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>I am in control of this application and my name is Bob Counter {this.counter}  State {this.state.myState}</h1>
        <button onClick={this.onPushMe}>
            Push Me
          </button>
  
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyComponent onPush={onPush} whatToSay ={whatever} counter={this.counter} />

      </header>
      
    </div>
  )
  
}
}

export default App;

import React, { Component } from 'react';
import spider1 from './components/spider1.svg';
import spider2 from './components/spider2.svg';
import spider3 from './components/spider3.svg';
import spider4 from './components/spider4.svg';
import Logo from './components/logo.js';
import Game from './tictactoe/ticTacToe.js';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      appToRender: <Game/>,
    }
  }
  logoClick = (parm) => {

    console.log("onclick ", parm.target.getAttribute("todo"));

    switch (parm.target.getAttribute("todo")) {
      case "logo":
        this.setState({ appToRender: <Logo /> });
        break;
      case "TicTacToe":
        this.setState({ appToRender: <Game /> });
        break;
      default:
        this.setState({ appToRender: <Logo /> });
    }

    // this.setState({ appToRender: <TicTacToe /> });
  }

  render() {

    return (
      <div className="App">

        <div className="spiderContainer" >

          <div onClick={this.logoClick} todo="logo" className="imgContainer"><img src={spider1} className="App-logo spiders" alt="logo" /></div>
          <div onClick={this.logoClick} todo="TicTacToe" className="imgContainer"><img src={spider2} className="App-logo spiders" alt="logo" /></div>
          <div className="imgContainer"><img src={spider3} className="App-logo spiders" alt="logo" /></div>
          <div className="imgContainer"><img src={spider4} className="App-logo spiders" alt="logo" /></div>

        </div>
        {this.state.appToRender}

      </div>
    );
  }
}

export default App;

import React from 'react';
import logo from './logo.svg';
import spider1 from './components/spider1.svg';
import spider2 from './components/spider2.svg';
import spider3 from './components/spider3.svg';
import spider4 from './components/spider4.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <div className="spiderContainer" >
      
        <div className ="imgContainer"><img src={spider1} className="App-logo spiders" alt="logo" /></div>
        <div className ="imgContainer"><img src={spider2} className="App-logo spiders" alt="logo" /></div>
        <div className ="imgContainer"><img src={spider3} className="App-logo spiders" alt="logo" /></div>
        <div className ="imgContainer"><img src={spider4} className="App-logo spiders" alt="logo" /></div>
     
          </div>
        <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

      </header>
    </div>
  );
}

export default App;

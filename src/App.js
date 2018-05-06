import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


function Aboutme(){
  return(
    <header className='mine'>
    <h3 className='myname'>My Name Is Ali</h3>
    <p className='bio'>I'm from Iraq , I like nothing and i'm pretty boring :)</p>
    <div>
    <label className='label'>This is how i used to look when i was kid</label>
    <img src='https://i.ytimg.com/vi/DNcwW_mQ_pU/hqdefault.jpg' className='picture' alt='baby picture'/>
    </div>
    </header>
  );
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Aboutme />

      </div>
    );
  }
}

export default App;

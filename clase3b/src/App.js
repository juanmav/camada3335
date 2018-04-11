import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Leyenda from './components/Leyenda';
import Contador from './components/Contador';
import LeyendaStateLess from './components/LeyendaStateLess';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bienvenido camada 3335</h1>
        </header>
        <div className="App-intro">
            <Leyenda value={"Soy la leyenda 1"}/>
            <Leyenda value={"Soy dos la leyenda dos"}/>
            <LeyendaStateLess value={"Statelesssss"}/>
            <Contador/>
            <Contador initialCount={10}/>
            <Contador initialCount={-5}/>
        </div>
      </div>
    );
  }
}

export default App;

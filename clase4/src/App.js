import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Numeros from './components/Numeros';
import UserList from './components/UserList';
import UserForm from "./components/UserForm";

class App extends Component {
    render() {
        const listado1 = [1,2,3,4,5];
        const listado2 = [10, 20, 1, 2, 4];

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <div className="App-intro">
                    <UserForm/>
                    <UserList/>
                    <Numeros listado={listado1}/>
                    <Numeros listado={listado2}/>
                </div>
            </div>
        );
    }
}

export default App;

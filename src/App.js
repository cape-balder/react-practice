import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello world</h1>
        <Person name="Max" age="29"/>
        <Person name="Manu" age="28"/>
        <Person name="Staphanie" age="27"/>
      </div>
    );
  }
}

export default App;

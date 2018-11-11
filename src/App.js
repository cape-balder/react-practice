import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'
 
class App extends Component {

  state = {
    persons:[
      {name: 'Max', age:29},
      {name: 'Manu', age:28},
      {name: 'Staphanie', age:27}
    ]
  }

  switchNameHandler = (newName) => {
    //console.log('Was clicked!')
    // Don't do this: this.state.persons[0].name = 'Maximilian'
    this.setState({
      persons:[
        {name: newName, age:29},
        {name: 'Manu', age:28},
        {name: 'Staphanie', age:26}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons:[
        {name: 'Max', age:29},
        {name: event.target.value, age:28},
        {name: 'Staphanie', age:27}
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hello world</h1>
        <button
          style={style} 
          onClick={() => this.switchNameHandler('Maximilian')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this,'Max!')}
          changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;

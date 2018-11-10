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

  switchNameHandler = () => {
    //console.log('Was clicked!')
    // Don't do this: this.state.persons[0].name = 'Maximilian'
    this.setState({
      persons:[
        {name: 'Maximilian', age:29},
        {name: 'Manu', age:28},
        {name: 'Staphanie', age:26}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello world</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;

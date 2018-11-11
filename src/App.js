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
      ],
      showPersons: false
    })
  }

  deletePersondHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
                    click={this.deletePersondHandler.bind(this, index)}
                    name={person.name} 
                    age={person.age}/>
          })}
        </div> 
      )
    }

    return (
      <div className="App">
        <h1>Hello world</h1>
        <button
          style={style} 
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;

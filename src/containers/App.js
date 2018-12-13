import React from 'react';
import Classes from './App.css';
import Persons from '../components/Persons/Persons';

class App extends React.Component {
  state = {
    persons: [
      { id: 'dfasdf', name: 'Max', age: 28 },
      { id: 'cxvsDV', name: 'Manu', age: 29 },
      { id: 'cad', name: 'Stefan', age: 26 }
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    // const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }


  render() {
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons){
      persons = (
        <div>
          <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />
        </div>
      );

      btnClass = Classes.Red;
    }

    const classes = [];
    if (this.state.persons.length <= 2){
      classes.push(Classes.red); // classes = ['red']
    }

    if (this.state.persons.length <= 1){
      classes.push(Classes.bold); // classes = ['red', bold']
    }

    return (
      <div className={Classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button
        className={btnClass}
        onClick={this.togglePersonsHandler}>Switch Persons</button>

        {persons}
          
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
  }
}

export default App;

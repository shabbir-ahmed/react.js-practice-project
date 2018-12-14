import React from 'react';
import Classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends React.PureComponent {
  constructor(props){
    super(props);
    console.log('App.js Inside Constructor', props);
    this.state = {
      persons: [
        { id: 'dfasdf', name: 'Max', age: 28 },
        { id: 'cxvsDV', name: 'Manu', age: 29 },
        { id: 'cad', name: 'Stefan', age: 26 }
      ],
      showPersons: false
    }
  }

  componentWillMount(){
    console.log('App.js Inside compnentWillMount()');
  }

  componentDidMount(){
    console.log('App.js Inside componentDidMount()');
  }

  componentWillReceiveProps(nextProps){
    console.log('Update App.js Inside componentWillReceiveProps()', nextProps);
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('Update App.js Inside shouldComponentUpdate()', nextProps, nextState);
  //   return nextState.persons !== this.state.persons || nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState){
    console.log('Update App.js Inside componentWillUpdate()', nextProps, nextState);
  }

  componentDidUpdate(){
    console.log('Update App.js Inside componentDidUpdate()');
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
    console.log('App.js inside render');
    let persons = null;

    if (this.state.showPersons){
      persons = <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />
    }

    return (
      <div className={Classes.App}>
      <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
      <Cockpit 
        appTitle={this.props.title}
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        toggle={this.togglePersonsHandler} />

        {persons}
          
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
  }
}

export default App;

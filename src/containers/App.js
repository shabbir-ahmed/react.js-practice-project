import React from 'react';
import Classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';

export const AuthContext = React.createContext(false);

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
      showPersons: false,
      toggleClicked: 0,
      authenticated: false
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

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('Update App.js Inside getDerivedStateFromProps()', nextProps, prevState);

    return prevState;
  }

  getSnapshotBeforeUpdate(){
    console.log('Update App.js Inside getSnapshotBeforeUpdate()');
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
    this.setState( (prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    });
  }

  loginHandler = () => {
    this.setState({authenticated: true})
  }

  render() {
    console.log('App.js inside render');
    let persons = null;

    if (this.state.showPersons){
      persons = <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} 
          isAuthenticated={this.state.authenticated}/>
    }

    return (
      <Aux>
        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit 
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          login={this.loginHandler}
          toggle={this.togglePersonsHandler} />
          <AuthContext.Provider value={this.state.authenticated}>
            {persons}
          </AuthContext.Provider>

      </Aux>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
  }
}

export default withClass(App, Classes.App);

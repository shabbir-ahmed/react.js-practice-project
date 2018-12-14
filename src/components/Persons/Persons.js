import React from 'react';

import Person from './Person/Person';

class Persons extends React.PureComponent{

  constructor(props){
    super(props);
    console.log('Persons.js Inside Constructor', props);
  }

  componentWillMount(){
    console.log('Persons.js Inside compnentWillMount()');
  }

  componentDidMount(){
    console.log('Persons.js Inside componentDidMount()');
  }

  componentWillReceiveProps(nextProps){
    console.log('Update Persons.js Inside componentWillReceiveProps()', nextProps);
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('Update Persons.js Inside shouldComponentUpdate()', nextProps, nextState);
  //   return nextProps.persons !== this.props.persons || nextProps.changed !== this.props.changed || nextProps.clicked !== this.props.clicked;
  //   // return true;
  // }

  componentWillUpdate(nextProps, nextState){
    console.log('Update Persons.js Inside componentWillUpdate()', nextProps, nextState);
  }

  componentDidUpdate(){
    console.log('Update Persons.js Inside componentDidUpdate()');
  }

  render(){
    return this.props.persons.map((person, index) => {
      return <Person 
        key={person.id}
        name={person.name} 
        age={person.age}
        click={() => this.props.clicked(index)}
        changed={(event) => this.props.changed(event, person.id)} />
    });
  }
}

export default Persons;
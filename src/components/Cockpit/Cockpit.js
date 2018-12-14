import React from 'react';
import Classes from './Cockpit.css';
import Aux from '../../hoc/Aux';

const cockpit = (props) => {
    const classes = [];

    let btnClass = Classes.Button;

    if(props.showPersons){
        btnClass = [Classes.Button, Classes.Red].join(' ');
    }

    if (props.persons.length <= 2){
      classes.push(Classes.red); // classes = ['red']
    }

    if (props.persons.length <= 1){
      classes.push(Classes.bold); // classes = ['red', bold']
    }

    return (
        <Aux>
            <h1>{props.appTitle}</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.toggle}>Toggle Persons</button>
            <button onClick={props.login}>Log In</button>
        </Aux>
    );
};

export default cockpit;
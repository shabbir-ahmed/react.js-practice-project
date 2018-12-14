import React from 'react';
import Classes from './Cockpit.css';

const cockpit = (props) => {
    const classes = [];

    let btnClass = '';

    if(props.showPersons){
        btnClass = Classes.Red;
    }

    if (props.persons.length <= 2){
      classes.push(Classes.red); // classes = ['red']
    }

    if (props.persons.length <= 1){
      classes.push(Classes.bold); // classes = ['red', bold']
    }

    return (
        <div className={Classes.Cockpit}>
            <h1>{props.appTitle}</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button
            className={btnClass}
            onClick={props.toggle}>Toggle Persons</button>
        </div>
    );
};

export default cockpit;
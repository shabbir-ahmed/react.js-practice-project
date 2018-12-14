import React from 'react';
import Classes from './Person.css';

class Person extends React.Component {
    constructor(props){
        super(props);
        console.log('Person.js Inside Constructor', props);
    }
    
    componentWillMount(){
        console.log('Person.js Inside compnentWillMount()');
    }
    
    componentDidMount(){
        console.log('Person.js Inside componentDidMount()');
    }

    render(){
        return (
            <div className={Classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
        );
    }
}

export default Person;


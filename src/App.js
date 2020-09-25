import React, {Component} from 'react';
import './App.css';
import './Person/Person.css'
import Person from "./Person/Person";

class App extends Component {
    state = {
        persons: [
            {name: "Moussa", age: 25},
            {name: "Rama", age: 23},
            {name: "Meissa", age: 27}
        ],
        showPersons: false
    };

    switchNameHandler = newName => {
        //console.log('Was clicked !')
        this.setState({
            persons: [
                {name: newName, age: 5},
                {name: "Rama", age: 23},
                {name: "Meissa", age: 27}
            ]
        })
    }

    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                {name: "Moussa", age: 23},
                {name: event.target.value, age: 5},
                {name: "Meissa", age: 27}
            ]
        })
    }

    togglePersonsHandler = () => {
        this.setState({
            showPersons: !this.state.showPersons
        })
    }

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };
        return (
            <div className="App">
                <h1>Hi, I'm a react App</h1>
                <p>This is really working</p>
                <button style={style}
                        onClick={this.togglePersonsHandler}>Switch person
                </button>

                {this.state.showPersons ?
                    <div>
                        <Person name={this.state.persons[0].name}
                                age={this.state.persons[0].age}
                        />
                        <Person name={this.state.persons[1].name}
                                age={this.state.persons[1].age}
                                click={this.switchNameHandler.bind(this, "depuis un paragraphe")}
                                change={this.nameChangeHandler}
                        >Hobbies:
                            Basketball </Person>
                        <Person name={this.state.persons[2].name}
                                age={this.state.persons[2].age}> </Person>
                    </div> : null
                }
            </div>
        );
    }
}

export default App;

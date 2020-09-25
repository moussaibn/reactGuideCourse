import React, {Component} from 'react';
import './App.css';
import './Person/Person.css'
import Person from "./Person/Person";

class App extends Component {
    state = {
        persons: [
            {id:'kjfd', name: "Moussa", age: 25},
            {id:'fdh',name: "Rama", age: 23},
            {id:'fdgfdh',name: "Meissa", age: 27}
        ],
        showPersons: false
    };

    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                {name: "Moussa", age: 23},
                {name: event.target.value, age: 5},
                {name: "Meissa", age: 27}
            ]
        })
    }

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
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
        let persons = null;
        if (this.state.showPersons)
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                        />
                    })}
                </div>
            );
        return (
            <div className="App">
                <h1>Hi, I'm a react App</h1>
                <p>This is really working</p>
                <button style={style}
                        onClick={this.togglePersonsHandler}>Toggle view person
                </button>

                {persons}
            </div>
        );
    }
}

export default App;

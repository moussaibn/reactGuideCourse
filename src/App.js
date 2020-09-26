import React, {Component} from 'react';
import './App.css';
import './Person/Person.css'
import Person from "./Person/Person";

class App extends Component {
    state = {
        persons: [
            {id: 'kjfd', name: "Moussa", age: 25},
            {id: 'fdh', name: "Rama", age: 23},
            {id: 'fdgfdh', name: "Meissa", age: 27}
        ],
        showPersons: false
    };

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id
        });
        const person = {...this.state.persons[personIndex]};
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({persons: persons});
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
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid',
            padding: '8px',
            cursor: 'pointer'
        };
        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            changed={(event) => this.nameChangeHandler(event, person.id)}
                        />
                    })}
                </div>
            );
            style.backgroundColor = 'red';
        }
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

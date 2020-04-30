import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Gehan", age: 44 },
      { name: "Dissas", age: 14 },
      { name: "Geethul", age: 10 },
    ],
    otherState: "Don't Change this value",
    showPersons: false,
  };

  /* With name parameter */
  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 44 },
        { name: "T.D.R. Mendis ", age: 14 },
        { name: "T.G.D. Mendis ", age: 10 },
      ],
    });
  };

  /* With name event */
  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "T.G.A. Mendis ", age: 44 },
        { name: event.target.value, age: 14 },
        { name: "T.G.D. Mendis ", age: 10 },
      ],
    });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "2px solid blue",
      padding: "8px",
      cursor: "pointer",
    };
    return (
      <div className="App">
        <h1>How to Render Content Conditionally in React</h1>
        <button style={style} onClick={this.togglePersonHandler}>
          Toggle Name
        </button>
        {this.state.showPersons === true ? (
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              click={this.switchNameHandler.bind(this, "T.G.A. Mendis II")}
            >
              My Hobby is writing JS code
            </Person>
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              changed={this.nameChangeHandler}
            />
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;

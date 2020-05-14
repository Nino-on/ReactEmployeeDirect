import React, { Component } from 'react';
import './App.css';
import Table from './components/employee_list.js';
import Searchbar from './components/search.js';
import employees from './Employees.json';




class App extends Component {
  state = {
    employees: employees,
    username: ""
  };

  changeUserName = (username) => {


    this.setState({ username: username });
    console.log(this.state)
  }

  render() {
    console.log(employees)
    return (

      <div>
        <Searchbar
          handleSubmit={this.changeUserName}


        />
        {this.state.employees.filter(employee => {
          if (!this.state.username) {
            return true
          } else if (employee.name.toLowerCase().includes(this.state.username.toLowerCase())) {
            return true
          } else {
            return false
          }
        }).map((employee, index) => (
          <Table key={index}
            id={employee.id}
            name={employee.name}
            occupation={employee.occupation}
            location={employee.location}
          />

        ))};
      </div>
    );
  }
}

export default App;

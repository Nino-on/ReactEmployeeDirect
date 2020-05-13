import React, { Component } from 'react';
import './App.css';
import Table from  './components/employee_list.js';
import employee from './Employee.json';

class App extends Component{
  state={
    employee:employee
  };

 
  render() {
    console.log (employee)
      return(
        <div>
          {this.state.employee.map((employee,index)=>(
            <Table key={index}
              id={employee.id}
              name={employee.name}
              occupation={employee.occupation}
              location={employee.location}
              />
          ))};
        </div>
      );
          }}  
  
export default App;

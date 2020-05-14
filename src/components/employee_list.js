import React from "react";

function Table(props) {
  return (
    <table className="table table-striped">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Employee Name</th>
            <th scope="col">Occupation</th>
            <th scope="col">Location</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">{props.id}</th>
            <td>{props.name}</td>
            <td>{props.occupation}</td>
            <td>{props.location}</td>
            </tr>
            </tbody>
  </table>
  );
}

export default Table;


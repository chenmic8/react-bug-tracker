import React from "react";
import { useState } from "react";
import Bug from "./Bug";
import "../App.css";
import { Link } from "react-router-dom";

export default function Home() {
  const [users] = useState([
    { id: 1, name: "bug1", description: "bug1 description" },
    { id: 2, name: "bug2", description: "bug2 description" },
    { id: 3, name: "bug3", description: "bug3 description" },
  ]);

  return (
    <div className="App">
      <h1 className="bug-header">Bugs</h1>
      <Link className="newbugbutton" to="/newbug">
        Add New Bug
      </Link>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <Bug
              key={user.id}
              name={user.name}
              description={user.description}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

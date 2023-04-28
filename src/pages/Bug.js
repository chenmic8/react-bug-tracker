import React from "react";
import "../App.css";

function Bug({ name, description }) {
  return (
    <tr className="active-row">
      <td>{name}</td>
      <td>{description}</td>
    </tr>
  );
}

export default Bug;

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import handleSubmit from "./handleSubmit";

function NewBug() {
  return (
    <div>
      <h1 className="bug-header">Add New Bug</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Bug Name:
          <input />
        </label>
        <br></br>
        <label>
          Bug Description:
          <input />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewBug;

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import NewBug from "./NewBug";
import EditBug from "./EditBug";
import App from "./App";

export default function BugRouter() {
  return (
    <Routes>
      <Route path="/newbug" element={<NewBug />} />
      <Route path="/editbug" element={<EditBug />} />
      <Route path="/" element={<App />} />
    </Routes>
  );
}

function NewBugButton() {
  let navigate = useNavigate();

  function handleClick() {
    navigate.push("/newbug");
  }
  return <button onClick={handleClick}>Add New Bug</button>;
}

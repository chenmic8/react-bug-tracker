import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewBug from "./pages/NewBug";
import EditBug from "./pages/EditBug";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/newbug" element={<NewBug />} />
      <Route path="/editbug" element={<EditBug />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

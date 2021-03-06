import Register from "./Pages/Register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import List from "./Pages/List/List";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Favorite from "./Pages/Favorite/Favorite";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Register />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route path="/lists" element={<List />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </Router>
    </>
  );
}

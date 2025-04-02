import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"; // Import Navigate correctly
import Register from "./Components/Register";
import Login from "./Components/Login";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/* Redirect root ("/") to /register */}
          <Route path="/" element={<Navigate to="/register" />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

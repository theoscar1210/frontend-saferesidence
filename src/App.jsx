import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import RegistroIngreso from "./components/RegistroIngreso";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro-ingreso" element={<RegistroIngreso />} />
      </Routes>
    </Router>
  );
}

export default App;

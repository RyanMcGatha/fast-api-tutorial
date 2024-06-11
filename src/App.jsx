import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Tutorial from "./components/Tutorial";
import Navbar from "./components/Navbar";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tutorial" element={<Tutorial />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

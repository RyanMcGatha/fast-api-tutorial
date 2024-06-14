import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Setup from "./pages/Setup";
import DatabaseSetup from "./pages/DatabaseSetup";
import CreatingModels from "./pages/CreatingModels";
import CRUDOperations from "./pages/CRUDOperations";
import CreatingRoutes from "./pages/CreatingRoutes";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/setup" element={<Setup />} />
          <Route path="/db" element={<DatabaseSetup />} />
          <Route path="/models" element={<CreatingModels />} />
          <Route path="/crud" element={<CRUDOperations />} />
          <Route path="/creating-routes" element={<CreatingRoutes />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

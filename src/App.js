import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Error } from "./pages/Error";
import User from "./components/User";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:userId" element={<User />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../src/styles/App.css';
import Home from "./pages/Home";
import User from "./pages/User";

function App() { 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

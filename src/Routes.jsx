// src/Routes.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
function Routess() {
  return (
    <Router>
      <Routes>
        <Route path="home" component={Home} />
        <Route path="about" component={About} />
      </Routes>
    </Router>
  );
}

export default Routess;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Codex from './Codex';
import Menu from './Menu';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/codex" element={<Codex />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  );
}

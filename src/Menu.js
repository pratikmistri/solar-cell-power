import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

export default function Menu() {
  return (
    <div className="menu">
      <div className="grid">
        <div className="card">Card 1</div>
        <div className="card">Card 2</div>
        <div className="card">Card 3</div>
        <div className="card">Card 4</div>
        <div className="card">Card 5</div>
        <div className="card">Card 6</div>
      </div>
      <Link to="/" className="back">Back</Link>
    </div>
  );
}

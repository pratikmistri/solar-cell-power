import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  useEffect(() => {
    const text = 'Hello world';
    const size = 5;
    const grid = 16;
    const container = document.getElementById('dot-container');
    container.style.width = `${text.length * grid * size}px`;
    container.style.height = `${grid * size}px`;

    const off = document.createElement('canvas');
    off.width = grid;
    off.height = grid;
    const ctx = off.getContext('2d');
    ctx.font = `${grid}px monospace`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    for (let i = 0; i < text.length; i++) {
      const ch = text[i];
      ctx.clearRect(0, 0, grid, grid);
      ctx.fillText(ch, grid / 2, grid / 2);
      const data = ctx.getImageData(0, 0, grid, grid).data;
      for (let y = 0; y < grid; y++) {
        for (let x = 0; x < grid; x++) {
          const alpha = data[(y * grid + x) * 4 + 3];
          if (alpha > 128) {
            const dot = document.createElement('div');
            dot.className = 'dot';
            dot.style.left = `${(i * grid + x) * size}px`;
            dot.style.top = `${y * size}px`;
            const delay = (i * grid + x) * 0.03;
            dot.style.setProperty('--delay', `${delay}s`);
            container.appendChild(dot);
          }
        }
      }
    }
  }, []);

  return (
    <div className="center">
      <div id="dot-container" />
      <div className="links">
        <Link to="/codex">Hello Codex</Link>
        <Link to="/menu">Menu</Link>
      </div>
    </div>
  );
}

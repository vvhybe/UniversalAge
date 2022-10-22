import React from 'react';
import { useState, useEffect } from 'react';

function Cursor() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [mouseClick, setMouseClick] = useState(false);

  const isCurserVisible = (x, y) => ((x <= 1 || y <= 1) || (window.innerWidth - x <= 1 || window.innerHeight - y <= 1));

  useEffect(() => {
    document.addEventListener('mousemove', e => { setX(e.pageX); setY(e.pageY) })
    isCurserVisible(x, y);
  }, [x, y]);

  useEffect(() => {
    document.addEventListener('mousedown', () => { setMouseClick(true) });
    document.addEventListener("mouseup", () => {
      setTimeout(() => {
        setMouseClick(false);
      }, 300);
    })
  }, [mouseClick]);

  return (
    <div className={`curser ${isCurserVisible(x, y) ? "hide" : ''} ${mouseClick ? "click" : ''}`} style={{ left: x + 'px', top: y + 'px' }}></div>
  )
}

export default Cursor;
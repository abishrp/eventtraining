import React, { useState } from 'react';

export default function MouseEventsComponent() {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage('Clicked!');
  };

  const handleDoubleClick = () => {
    setMessage('Double Clicked!');
  };

  const handleMouseEnter = () => {
    setMessage('Mouse Entered!');
  };

  const handleMouseLeave = () => {
    setMessage('Mouse Left!');
  };

  const handleMouseMove = () => {
    setMessage('Mouse Moving!');
  };

  const handleMouseDown = () => {
    setMessage('Mouse Down!');
  };

  const handleMouseUp = () => {
    setMessage('Mouse Up!');
  };

  return (
    <div>
      <div
        style={{
          width: '150px',
          height: '150px',
          border: '2px solid black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          userSelect: 'none'
        }}
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        Mouse Events
      </div>
      <p>{message}</p>
    </div>
  );
}


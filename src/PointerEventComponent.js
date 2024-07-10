import React, { useState } from 'react';

export default function PointerEventsComponent() {
  const [message, setMessage] = useState('');

  const handlePointerEnter = () => {
    setMessage('Pointer Entered!');
  };

  const handlePointerLeave = () => {
    setMessage('Pointer Left!');
  };

  const handlePointerMove = () => {
    setMessage('Pointer Moving!');
  };

  const handlePointerDown = () => {
    setMessage('Pointer Down!');
  };

  const handlePointerUp = () => {
    setMessage('Pointer Up!');
  };

  const handlePointerOver = () => {
    setMessage('Pointer Over!');
  };

  const handlePointerOut = () => {
    setMessage('Pointer Out!');
  };

  const handlePointerCancel = () => {
    setMessage('Pointer Cancelled!');
  };

  return (
    <div>
      <div
        style={{
          width: '200px',
          height: '200px',
          border: '2px solid black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          userSelect: 'none'
        }}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onPointerMove={handlePointerMove}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onPointerCancel={handlePointerCancel}
      >
        Pointer Event
      </div>
      <p>{message}</p>
    </div>
  );
}

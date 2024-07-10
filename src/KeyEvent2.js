import React, { useState } from 'react';

export default function KeyEventsComponent() {
  const [message, setMessage] = useState('');

  const handleKeyDown = (event) => {
    setMessage(`Key Down: ${event.key}`);
  };

  const handleKeyUp = (event) => {
    setMessage(`Key Up: ${event.key}`);
  };

  const handleKeyPress = (event) => {
    setMessage(`Key Press: ${event.key}`);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="KeyeEvent Type something..."
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        onKeyPress={handleKeyPress}
      />
      <p>{message}</p>
    </div>
  );
}

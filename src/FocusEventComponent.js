import React from 'react';

const FocusEventComponent = () => {
  const handleFocus = () => {
    console.log('Input field focused');
  };

  return (
    <input type="text" onFocus={handleFocus} placeholder="Focus on this input" />
  );
};

export default FocusEventComponent;

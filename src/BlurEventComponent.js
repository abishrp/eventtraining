import React from 'react';

const BlurEventComponent = () => {
  const handleBlur = () => {
    console.log('Input field lost focus');
  };

  return (
    <input type="text" onBlur={handleBlur} placeholder="Blur this input" />
  );
};

export default BlurEventComponent;

import React from 'react';

const PasteEvent = () => {
  const handlePaste = (event) => {
    const pastedText = (event.clipboardData || window.clipboardData).getData('Text');
    console.log('Pasted content:', pastedText);
  };

  return (
    <input 
      type="text" 
      onPaste={handlePaste} 
      placeholder="Paste something here" 
    />
  );
};

export default PasteEvent;

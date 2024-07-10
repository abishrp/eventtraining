import React from 'react';

const CopyEventComponent = () => {
  const handleCopy = (event) => {
    console.log('Content copied:', window.getSelection().toString(),event.type);
  };

  return (
    <div onCopy={handleCopy}>
      <p>Copy some of this text.</p>
    </div>
  );
};

export default CopyEventComponent;

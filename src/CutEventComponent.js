import React from 'react';

const CutEventComponent = () => {
  const handleCut = (event) => {
    console.log('Content cut:', window.getSelection().toString(),event);
  };

  return (
    <div onCut={handleCut}>
      <p>Cut some of this text.</p>
    </div>
  );
};

export default CutEventComponent;

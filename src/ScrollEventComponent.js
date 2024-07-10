import React from 'react';

const ScrollEventComponent = () => {
  const handleScroll = () => {
    console.log('Scrolled');
  };

  return (
    <div onScroll={handleScroll} style={{ width: '200px',
      height: '200px',
      border: '2px solid black',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      userSelect: 'none', overflowY: 'scroll' }}>
      <p style={{ height: '200px' }}>Scroll within this area.</p>
    </div>
  );
};

export default ScrollEventComponent;

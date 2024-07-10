import React, { useEffect, useState } from 'react';

const ResizeEventComponent = () => {
  const [backgroundColor, setBackgroundColor] = useState('white');

  const handleResize = () => {
    const width = window.innerWidth;
    if (width < 600) {
      setBackgroundColor('lightblue');
    } else if (width >= 600 && width < 900) {
      setBackgroundColor('lightgreen');
    } else {
      setBackgroundColor('lightcoral');
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize(); // Call it initially to set the color based on the initial window size

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{ width: '200px',
      height: '200px',
      border: '2px solid black',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      userSelect: 'none',
       backgroundColor }}>
      <p>Resize Event</p>
    </div>
  );
};

export default ResizeEventComponent;

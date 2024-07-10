import React from 'react';

const DragEventComponent = () => {
  const handleDragStart = (event) => {
    console.log('Drag started');
  };

  const handleDragEnd = (event) => {
    console.log('Drag ended');
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      style={{
        width: '150px',
        height: '150px',
        border: '2px solid black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        userSelect: 'none'
      }}
    >
      <p>Drag me!</p>
    </div>
  );
};

export default DragEventComponent;

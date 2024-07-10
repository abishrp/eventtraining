import React, { useState } from 'react';

const EventHandlingComponent = () => {
const[state,setState]= useState(
    {
        count:0,
        inputvalue:"",
        message:""
    }
)
const handleClick =()=>{
    setState((prevState)=>(
        {...prevState,count: prevState.count+1, message: prevState.message="Click"}))
}
const handleKeyDown=(event)=>{
    setState((prevState)=>(
        {...prevState, input:`${event.key}`}))
}
const handleKeyUp=(event)=>{
    setState((prevState)=>(
        {...prevState,input:`${event.key}`}))
}
const handleKeyPress=(event)=>{
    setState((prevState)=>(
        {...prevState, input:`${event.key}`}))
}


  return (
    <div className='container'>
      <p>Action occured:{state.message}</p>
      <p>Count: {state.count}</p>
      <button onClick={handleClick}>Click</button>
      <input type="text" placeholder='Type'onKeyUp={handleKeyUp} onKeyPress={handleKeyPress} onKeyDown={handleKeyDown}/>
      <p>Input: {state.input}</p>
    </div>
  );
};

export default EventHandlingComponent;
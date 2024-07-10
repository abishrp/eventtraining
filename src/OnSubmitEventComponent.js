import React, { useState } from 'react';

export default function SubmitEventComponent() {
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    setMessage(`Form submitted with name: ${name}`);
  };

  return (
    <div>
      <h1>Submit Event Component</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

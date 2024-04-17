import React, { useState, useRef } from 'react';

const UserForm = () => {
  // State for controlled input
  const [name, setName] = useState('');
  // Ref for uncontrolled input
  const emailRef = useRef(null);
  // State for validation message
  const [validationMessage, setValidationMessage] = useState('');

  // Handler for controlled input change
  const handleNameChange = (event) => {
    setName(event.target.value);
    // Validate name length
    if (event.target.value.length < 3) {
      setValidationMessage('Name must be at least 3 characters long.');
    } else {
      setValidationMessage('');
    }
  };

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Access value of uncontrolled input using ref
    const emailValue = emailRef.current.value;
    // Log values to console
    console.log('Name:', name);
    console.log('Email:', emailValue);
  };

  return (
    <div>
      <h2>User Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Controlled input for name */}
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
          {/* Validation message */}
          {validationMessage && <p style={{ color: 'red' }}>{validationMessage}</p>}
        </div>
        {/* Uncontrolled input for email */}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            ref={emailRef}
          />
        </div>
        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;

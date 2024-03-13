import React, { useState } from 'react';
import '../Components/resources/login.css'

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can replace this with your form submission logic
  };

  return (
    <div className="signup-box">
      <h1>Sign Up</h1>
      <h4>It's free and only takes a minute</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">FirstName</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        <br />
        <label htmlFor="lastName">LastName</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        <br />
        <label htmlFor="email">Email</label>
        <input type="text" name="email" value={formData.email} onChange={handleChange} />
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        <br />
        <input type="submit" value="Sign Up" />
      </form>
      <p>
        By clicking the Sign Up button, you agree to our <br />
        <a href="#" style={{ color: 'rgb(127, 5, 249)' }}>Terms and Condition</a> and <a href="#" style={{ color: 'rgb(127, 5, 249)' }}>Policy Privacy</a>
      </p>
    </div>
  );
};

export default SignUpForm;

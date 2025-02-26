import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../pages/Login.css";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform login submission logic here (e.g., authentication)
    console.log("Login Form Submitted:", formData);

  try {
    const response = await fetch("http://localhost:5000/api/auth/login", {       
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Login failed:', errorData);
      throw new Error('Login failed');
    }

    const data = await response.json();
    console.log('Login successful:', data);

  // Redirect to the home page upon successful login
 navigate("/home");

  } catch (error) {
    console.error('Error during signup:', error);
  }
};


  return (
    <div className="login-container container-fluid">
      <h3>Login into your account.</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            autoComplete="password"
            required
          />
        </div>
        <span className="button">
        <button type="submit">Login</button>
        <p className="button-par">Don't already have an account?<Link to={"/"}>Signup</Link></p>
        </span>
      </form>
    </div>
  );
};

export default LoginForm;

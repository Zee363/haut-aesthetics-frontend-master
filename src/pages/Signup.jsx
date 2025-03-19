import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../pages/Signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
    const [formData, setFormData] = useState({
       fullname: "",
        email: "",
        password: "",
    });
     
    const navigate = useNavigate();


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitted:", formData);
    
    try {
        const response = await fetch("http://localhost:5000/api/auth/signup",  {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });

  
        if (!response.ok) {
            const errorData = await response.json();
            console.error('Signup failed:', errorData);
            throw new Error('Signup failed');
          }
    
          const data = await response.json();
          console.log('Signup successful:', data);

          // Redirect to the login page upon successful signup
          navigate("/login");

        } catch (error) {
          console.error('Signup failed:', error);
        }
    }

    return (
        <div className="signup-container">
            <h3>Don't have an account? Create one now!</h3>
           <form onSubmit={handleSubmit}>
           <div className="form-group">
            <label htmlFor="fullname">Full Name</label>
            <input type="text" id="fullname" name="fullname" value={formData.fullname} onChange={handleChange} required/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required/>
                </div>
                
                <span className="last-buttons">
                <button type="submit">Sign Up</button>
                <p className="button-par">Already have an account?<Link to={"/login"}>Login</Link></p>
                </span>

            </form>
        </div>
    ); 
};

export default Signup;
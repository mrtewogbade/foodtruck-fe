// import React from 'react'
import { signupImage } from "../../assets";
import { logo } from "../../assets";
import "./Signup.css";
import { register }  from "../../api/api"
import { useState } from "react";


  const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      // alert("Passwords do not match!");
      return;
    }
    try {
      await register({
        FirstName: formData.firstName,
        LastName: formData.lastName,
        PhoneNumber: formData.phone,
        Email: formData.email,
        Password: formData.password,
        ConfirmPassword: formData.confirmPassword, 
      });
      alert("Signup successful! Please log in.");
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("An unknown error occurred.");
      }
    }
  };

  return (
    <>
      <div className="signupContent">
        <div>
          <img className="signup-image" src={signupImage} alt="Signup" />
        </div>

          <form className="form-card" onSubmit={handleSubmit}>
          <img className="logo" src={logo} alt="Logo" />
          <h1 className="form-title">Create an Account</h1>

          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Your first name"
               value={formData.firstName}
            onChange={handleChange}
              required
            />
          </div>


          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Your Last name"
                value={formData.lastName}
                onChange={handleChange}
              required
            />
          </div>




          
          <div className="form-group">
            <label htmlFor="email">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Your phone number"
               value={formData.phone}
            onChange={handleChange}
              required
            />
          </div>





          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
               value={formData.email}
            onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Your password"
               value={formData.password}
            onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              name="confirmPassword" placeholder="Confirm your password"
                value={formData.confirmPassword}
            onChange={handleChange}
              required
            />
          </div>

          {/* <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div> */}

          <button type="submit" className="submit-btn">
            Signup
          </button>
        </form>
      </div>
    </>
  ) ;
};

export default Signup;




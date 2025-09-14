import { signupImage } from "../../assets";
import { logo } from "../../assets";
import "./VerifyEmail.css";
import { useState } from "react";

const VerifyEmail = () => {
  const [code, setCode] = useState("");

  return (
    <>
      <div className="signupContent">
        <div>
          <img className="signup-image" src={signupImage} alt="Signup" />
        </div>

        <div className="verification-container">
          <img className="logo" src={logo} alt="Logo" />
          <h1>Welcome to Food Truck</h1>
          <p>Just one more step to get started with delicious food delivery!</p>
          <div className="verification-card">
            <div className="email-icon">📧</div>
            <h2>Verify Your Email</h2>
            <p>We’ve sent a 6-digit code to user@example.com</p>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Enter 6-digit code"
              maxLength={6}
            />
            <button disabled>Verify Email</button>
            <p>Didn't receive the code?</p>
            <a href="#">Resend Code</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyEmail;

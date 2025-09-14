import { signupImage } from "../../assets";
import { logo } from "../../assets";
import "./ResetPassword.css";
const ResetPassword = () => {
  return (
    <>
      <div className="signupContent">
        <div>
          <img className="signup-image" src={signupImage} alt="Signup" />
        </div>

        <form className="form-card">
          <img className="logo" src={logo} alt="Logo" />
          <h1 className="form-title">Reset Your Password</h1>

          <pre className="form-description">Enter your email below and we’ll send you instructions on <br/> how to reset your password.</pre>

        

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
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
            Send reset instructions
          </button>
        </form>
      </div>
    </>
  );
};

export default ResetPassword;

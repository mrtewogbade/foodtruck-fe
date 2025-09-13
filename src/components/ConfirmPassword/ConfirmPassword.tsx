import { signupImage } from "../../assets";
import { logo } from "../../assets";
import "./ConfirmPassword.css";
const ConfirmPassword = () => {
  return (
    <>
      <div className="signupContent">
        <div>
          <img className="signup-image" src={signupImage} alt="Signup" />
        </div>

        <form className="form-card">
          <img className="logo" src={logo} alt="Logo" />
          <h1 className="form-title">Confirm Your Password</h1>

        

          <div className="form-group">
            <label htmlFor="email">Password</label>
            <input
              type="Password"
              id="Password"
              name="Password"
              placeholder="Enter your password"
              required
            />
          </div>

          
          <div className="form-group">
            <label htmlFor="email">Confirm Password</label>
            <input
              type="Password"
              id="Password"
              name="Password"
              placeholder="Enter your password"
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

          <p className="form-link">Go back to  <a className="hh" href="/login">sign in</a></p>

        </form>
      </div>
    </>
  );
};

export default ConfirmPassword;

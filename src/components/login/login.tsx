import { signupImage } from "../../assets";
import { logo } from "../../assets";
import "./login.css";
const Login = () => {
  return (
    <>
      <div className="signupContent">
        <div>
          <img className="signup-image" src={signupImage} alt="Signup" />
        </div>

        <form className="form-card">
          <img className="logo" src={logo} alt="Logo" />
          <h1 className="form-title">Welcome back to Food Truck</h1>

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your  Name"
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
            LOG IN
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;

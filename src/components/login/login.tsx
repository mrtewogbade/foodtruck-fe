import { signupImage } from "../../assets";
import { logo } from "../../assets";
import "./login.css";
import { useState } from "react";
import { login } from "../../api/api";
const Login = () => {

    const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await login({
        phone_or_email: formData.email,
        password: formData.password,
      });

      alert(result.message || "Login successful!");
      window.location.href = "/";
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("Something went wrong");
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
          <h1 className="form-title">Welcome back to Food Truck</h1>

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

          <button type="submit" className="submit-btn">
            LOG IN
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;

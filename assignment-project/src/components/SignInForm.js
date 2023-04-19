import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();

  /* Handling sign-in form submit */
  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = {};
    /* Validations */
    if (!email) {
      errors.email = "Email is required";
    }
    if (!password) {
      errors.password = "Password is required";
    }
    if (Object.keys(errors).length === 0) {
      navigate("/uploadfiles"); /* If no errors navigating to uploadfiles page*/
    } else {
      setErrors(errors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <header>
        <h2>Sign In</h2>
      </header>
      <label>Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      {errors.email && <div className="error">{errors.email}</div>}

      <label>Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      {errors.password && <div className="error">{errors.password}</div>}

      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignInForm;

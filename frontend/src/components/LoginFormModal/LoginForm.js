// frontend/src/components/LoginFormModal/LoginForm.js
import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


function LoginForm() {
  const history = useHistory()
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    
    return dispatch(sessionActions.login({ email, password })).catch(
      async (res) => {
        
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    )
    
  };

  const demoUser = (e) => {
    e.preventDefault();
    setErrors([]);
    setEmail('john.smith@gmail.com');
    setPassword('secret password');
    return dispatch(sessionActions.demoUsers()).catch(
        async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors);
        }
    );
};

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <label>
        Username or Email
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button  type="submit">Log In</button>
      <button type="submit" onClick={demoUser}>Demo User</button>
    </form>
  );
}

export default LoginForm;
import React, { useState } from "react";
import { GiCancel } from "react-icons/gi";

const Login = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-card">
      <div className="card-content">
        <div className="login-container">
          <div className="login-title">
            <h1 style={{ color: "#d32f2f" }}>Login to Trippers</h1>
          </div>
          <div className="input-field">
            <input
              type="email"
              placeholder="Email ID"
              name=""
              id=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              name=""
              id=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="button" className="btn-login">
            Login
          </button>
        </div>
        <p
          className="login-cancel-btn"
          style={{ color: "#d32f2f" }}
          onClick={onClose}
        >
          <GiCancel />
        </p>
      </div>
    </div>
  );
};

export default Login;

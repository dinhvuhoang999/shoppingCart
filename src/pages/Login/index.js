import React, { useState } from 'react';
import './style.css';

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="container">
      <div className="d-flex justify-content-center h-100">
        <div className="card">
          <div className="card-header">
            <h3>Sign In</h3>
            <div className="d-flex justify-content-end social_icon">
              <span><i className="fab fa-facebook-square" /></span>
              <span><i className="fab fa-google-plus-square" /></span>
              <span><i className="fab fa-twitter-square" /></span>
            </div>
          </div>
          <div className="card-body">
            <form>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fas fa-user" /></span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="username"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

              </div>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fas fa-key" /></span>
                </div>
                <input
                  type="password"
                  className="form-control"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="row align-items-center remember">
                <input type="checkbox" />
                Remember Me
              </div>
              <div className="form-group">
                <input type="submit" value="Login" className="btn float-right login_btn" />
              </div>
            </form>
          </div>
          <div className="card-footer">
            <div className="d-flex justify-content-center links">
              Don't have an account?
              <a href="2">Sign Up</a>
            </div>
            <div className="d-flex justify-content-center">
              <a href="1">Forgot your password?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;

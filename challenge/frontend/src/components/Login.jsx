import React from 'react';
import '../assets/styles/components/Login.scss';

const Login = () => {
    return (
        <div className="login__container">
          <h2>Log in to your account</h2>
          <form action="" className="login__container--form"> 
            <input
              name="email"
              aria-label="Email"
              className="input"
              type="text"
              placeholder="Email Adress"
              required
            />
            <input
              name="password"
              aria-label="Password"
              className="input"
              type="password"
              placeholder="Password"
              required
            />
            <button className="button" type="submit">Login</button>
          </form>
        </div>
    );
}

export default Login;
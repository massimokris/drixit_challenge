import React, { useState } from 'react';
import '../assets/styles/components/Login.scss';

const Login = () => {
    const [form, setValues] = useState({
        email: ""
    });

    const handleInput = event => {
        setValues({
            ...form,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(form);
    }

    return (
        <div className="login__container">
          <h2>Log in to your account</h2>
          <form action="" className="login__container--form" onSubmit={handleSubmit}> 
            <input
              name="email"
              aria-label="Email"
              className="input"
              type="text"
              placeholder="Email Adress"
              onChange={handleInput}
              required
            />
            <input
              name="password"
              aria-label="Password"
              className="input"
              type="password"
              placeholder="Password"
              onChange={handleInput}
              required
            />
            <button className="button" type="submit">Login</button>
          </form>
        </div>
    );
}

export default Login;
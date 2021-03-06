import React, { useState } from "react";
import { loginUser } from "../actions";
import { connect } from "react-redux";
import "../assets/styles/components/Login.scss";

const Login = props => {
  const [form, setValues] = useState({
    email: ""
  });

  const handleInput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    });
    if (event.target.name === "email") validEmail(event.target.value);
  };

  const validEmail = email => {
    const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email.match(pattern)) {
      document.getElementsByClassName("button")[0].style.display = "block";
      document.getElementsByClassName("input")[1].style.display = "block";
    } else {
      document.getElementsByClassName("button")[0].style.display = "none";
      document.getElementsByClassName("input")[1].style.display = "none";
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.loginUser(form);
  };

  return (
    <div className="login__container">
      <h2>Log in to your account</h2>
      <form
        action=""
        className="login__container--form"
        onSubmit={handleSubmit}
      >
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
        <button className="button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  loginUser
};

export default connect(null, mapDispatchToProps)(Login);

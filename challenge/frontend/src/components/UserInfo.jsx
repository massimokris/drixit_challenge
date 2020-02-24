import React from "react";
import { connect } from "react-redux";
import { getUser } from "../actions";
import "../assets/styles/components/UserInfo.scss";

const UserInfo = props => {
  const { user } = props;

  const handleUser = () => {
    if (!user.name) {
      let token = document.cookie;
      if (token) {
        token = token.split("=");
        props.getUser(token[1]);
      } else {
        alert('You must be loged');
        window.location = "/login";
      }
    }
  };
  handleUser();

  return !user.name ? (
    <h1>Loading...</h1>
  ) : (
    <div className="info__container">
      <img
        className="info__container--img"
        src={user.avatar}
        alt="user-image"
      />
      <h2>
        {user.name} {user.surname}
      </h2>
      <h3>{user.email}</h3>
      <h4>{user.age} Years old</h4>
      <h4>{user.role.toUpperCase()}</h4>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = {
  getUser
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);

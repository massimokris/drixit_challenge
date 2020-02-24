import React from "react";
import '../assets/styles/components/UserInfo.scss';

const UserInfo = () => {
  return (
    <div className="info__container">
      <img
        className="info__container--img"
        src=""
        alt="user-image"
      />
      <h2>
        Massimo Di Berardino
      </h2>
      <h3>example@email.com</h3>
      <h4>23 Years old</h4>
      <h4>Admin</h4>
    </div>
  );
};

export default UserInfo;

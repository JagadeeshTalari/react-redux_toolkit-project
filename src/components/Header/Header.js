import React from "react";
import { Link } from "react-router-dom";
import user from "../../images/user1.jpg";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>
      <div className="user-image">
        <img width={50} src={user} alt="user-profile" />
      </div>
      Header
    </div>
  );
};

export default Header;

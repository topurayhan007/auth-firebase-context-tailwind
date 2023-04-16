import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <a className="btn btn-ghost normal-case text-xl">AuthMaster</a>
        <div className="ms-auto">
          <Link className="btn btn-ghost normal-case text-lg" to="/">
            Home
          </Link>
          <Link className="btn btn-ghost normal-case text-lg" to="/login">
            Login
          </Link>
          <Link className="btn btn-ghost normal-case text-lg" to="/register">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

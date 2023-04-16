import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthPorviders";

const Header = () => {
  const { user } = useContext(AuthContext);

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

        {user && (
          <div className="ms-auto">
            <label className=" font-semibold text-lg mr-2">
              {user.displayName}
            </label>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.image} />
              </div>
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

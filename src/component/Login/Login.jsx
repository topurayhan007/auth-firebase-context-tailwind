import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthPorviders";

const Login = () => {
  const { user, signIn, setUser } = useContext(AuthContext);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    setLoader(true);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);

        form.reset();
        setUser(loggedUser);
        setLoader(false);
        navigate("/");
        // navigate(0);
      })
      .catch((error) => {
        console.log(error.message);
        setLoader(false);
        alert(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Please Login!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                required
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="flex justify-center pb-4">
            <Link
              to="/register"
              className="label-text-alt text-center link link-hover"
            >
              New to AuthMaster? Register now!
            </Link>
          </div>
        </div>
      </div>
      {loader && (
        <div className="absolute top-0 right-0 bottom-0 left-0 m-auto w-20 h-20">
          {/* <progress className="progress w-56 h-3 progress-accent bg-purple-100"></progress> */}
          <button className="btn loading w-20 h-20 bg-transparent border-0 text-indigo-500"></button>
        </div>
      )}
    </div>
  );
};

export default Login;

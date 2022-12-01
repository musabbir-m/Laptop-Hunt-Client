import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";


const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { Login} = useContext(AuthContext)
  // const [data, setData] = useState("");
  const [loginError, setLoginError] = useState("");
  //to take to the right route after login start
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  // to take to the right route after login ends

  const handleLogin = (data) => {
    setLoginError("");
    Login(data.email, data.password)
      .then((user) => {
        console.log(user);
        //to tkae to the right route after login
        navigate(from, { replace: true });
      })
      .catch((err) => setLoginError(err.message));
    console.log(data);
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              className="input input-bordered w-full max-w-xs"
              type="email"
              {...register("email", {
                required: "email is required",
              })}
            />
            {errors.email && (
              <p className="text-red-600" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              className="input input-bordered w-full max-w-xs"
              type="password"
              {...register("password", {
                required: "Password is required",
              })}
            />
            <label className="label">
              <span className="label-text">Forget password?</span>
            </label>
            {errors.password && (
              <p className="text-red-600" role="alert">
                {errors.password?.message}
              </p>
            )}
            {loginError && <p>{loginError}</p>}
          </div>
          <input
            className="btn btn-accent w-full"
            value="login"
            type="submit"
          />
        </form>
        <p>
          New to doctors portal?{" "}
          <Link className="text-secondary" to="/signup">
            Create new account
          </Link>
        </p>
        <div className="divider">OR</div>

        <button className="btn btn-outline w-full">
          {" "}
          Sign in with github
        </button>
      </div>
    </div>
  );
};

export default Login;

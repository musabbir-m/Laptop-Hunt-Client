import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Signup = () => {
  const [signupError, setSignupError] = useState("");
  const { signUp, githubSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleSignUp = (data) => {
    console.log(data);
    setSignupError("");
    signUp(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        //toast('user created successfully')
        saveUser(data.name, data.email, data.role);
      })
      .catch((err) => setSignupError(err));
  };

  const saveUser = (name, email, role) => {
    const user = { name, email, role };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {});
    //jwt check
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center">Signup</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              className="input input-bordered w-full max-w-xs"
              type="text"
              {...register("name", { required: "" })}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              className="input input-bordered w-full max-w-xs"
              type="email"
              {...register("email", { required: "insert your email" })}
              {...register("email", { required: "email is required" })}
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
          </div>

          {/*  */}

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold">
                Select user-type
              </span>
            </label>
            <select className="select select-bordered" {...register("role")}>
              <option value='buyer'>Buyer</option>
              <option  value='seller'>Seller</option>
            </select>
          </div>

       {/*  */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              className="input input-bordered w-full max-w-xs"
              type="password"
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 6,
                  message: "password must be 6 characters or more",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
          </div>

          <input
            className="btn btn-accent w-full mt-5"
            value="Signup"
            type="submit"
          />
          {signupError && <p className="text-red-600">{signupError}</p>}
        </form>
        <p>
          Already have an account?{" "}
          <Link className="text-secondary" to="/login">
            Login
          </Link>
        </p>
        <div className="divider">OR</div>

        <button className="btn btn-outline w-full"> Sign in with GitHub</button>
      </div>
    </div>
  );
};

export default Signup;

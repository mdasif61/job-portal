import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Login = () => {

  const {signIn}=useContext(AuthContext)

  const navigate=useNavigate()

  const handleLogin=event=>{
    event.preventDefault();
    const form=event.target;
    const email=form.email.value;
    const password=form.password.value;
    console.log(email,password)

    signIn(email,password)
    .then(result=>{
      navigate('/')
      console.log(result)
    })
    .catch(error=>{
      console.log(error)
    })
  }

  return (
    <div className="hero min-h-screen bg-base-200 my-10">
      <div className="hero-content flex-col w-full">
        <div className="card flex-shrink-0 w-5/12 shadow-2xl bg-base-100">
          <div className="card-body w-full">
            <h1 className="text-center font-bold text-xl">Login Please</h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                />
                <p>Are You New?<Link to='/register' className="text-blue-500 underline">Register</Link></p>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

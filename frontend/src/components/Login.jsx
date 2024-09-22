import React,{ useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [user, setUser] = useState({
    
    username: "",
    password: "",
  });
  
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(user);
  setUser({username: "",
    password: "",})
    
    
  };
  return (
    <div className="min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
        <h1 className="text-3xl font-bold text-center text-gray-800">Login</h1>
        <form action="" onSubmit={onSubmitHandler}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-800">Username</span>
            </label>
            <input
              className="w-full text-gray-800 input input-border border-slate-900 h-10 bg-inherit"
              type="text"
              placeholder="  write username..."
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-800">Password</span>
            </label>
            <input
              className="w-full text-gray-800 input input-border border-slate-900 h-10 bg-inherit"
              type="password"
              placeholder="  write password..."
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          <div>
            <button type="submit" className="btn btn-block btn-sm mt-2 border border-slate-700">Login</button>
          </div>
          <Link to="/register" className="text-gray-800">Don't have an account?</Link>
        </form>
      </div>
    </div>
  );
}
export default Signup;

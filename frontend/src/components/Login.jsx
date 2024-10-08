import React,{ useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../redux/userSlice";
import toast from "react-hot-toast";
import {BASE_URL} from "../config"

function Signup() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const dispatch =useDispatch();
  const navigate =useNavigate();
  
  const onSubmitHandler = async(e) => {
    e.preventDefault();
    try {
      const res= await axios.post(`${BASE_URL}/user/login`,user,{
        headers:{
          'Content-Type':'application/json'
        },
        withCredentials:true
      });
      
    
      if(res?.data?.success==true){
      navigate("/home");
      toast.success(res?.data?.message)
      dispatch(setAuthUser(res?.data?.data))
      }

    }
    
    catch (error) {      
      toast.error(error?.response?.data?.message || "internal server error");
      console.log(error);
    }


    setUser({
      email: "",
      password: "",
    })
    
    
  };
  return (
    <div className="min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
        <h1 className="text-3xl font-bold text-center text-gray-800">Login</h1>
        <form action="" onSubmit={onSubmitHandler}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-800">Email</span>
            </label>
            <input
              className="w-full text-gray-800 input input-border border-slate-900 h-10 bg-inherit"
              type="email"
              placeholder="  write email..."
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
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

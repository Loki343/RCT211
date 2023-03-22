import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../Redux/AuthReducer/action";

// Complete the logic do not remove any data-testid
const init={
  email:'',
  password: ''
}

export const Login = () => {
  const [user, setUser]= useState(init);

  const dispatch=useDispatch();
  const location = useLocation();
  const naviagate= useNavigate();

  const token=useSelector(store=>store.authReducer.token);
  // console.log(token);

  const handleChange=(e)=>{
    // console.log(e.target.value);
    const {name, value}=e.target;
    setUser(prev=>{
      return {...prev, [name]: value}
    })
  }

  const handleLogin=()=>{
    dispatch(login(user)).then(()=>{
      naviagate(location.state, {replace:true});
    })
    // console.log(user);
  };


  return (
    <div>
      <h2>Log In</h2>
      <input data-testid="user-email" type="email" placeholder="Email" 
      name="email"
     
      onChange={handleChange}/>
      <input
        data-testid="user-password"
        type="password"
        placeholder="Password"
        name="password"
        
        onChange={handleChange}
      />
      <button data-testid="user-login" onClick={handleLogin}>Log In</button>
    </div>
  );
};

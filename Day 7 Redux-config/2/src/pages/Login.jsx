import React, { useState } from "react";
import axios from "axios";
import { loginRequestAction, loginSuccessAction } from "../redux/auth/action";
import { useDispatch, useSelector } from "react-redux";
import { loginFailureAction } from "../redux/auth/action";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const auth = useSelector((store) => {
    return store.auth;
  });
  console.log(auth);

  const handleLogin = () => {
    let userData = { email, password };
    console.log(userData);
    dispatch(loginRequestAction());
    axios
      .post("https://reqres.in/api/login", userData)
      .then((res) => {
        dispatch(loginSuccessAction(res.data.token));
      })
      .catch((err) => {
        dispatch(loginFailureAction());
      });
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>LogIn</button>
    </div>
  );
};

export default Login;

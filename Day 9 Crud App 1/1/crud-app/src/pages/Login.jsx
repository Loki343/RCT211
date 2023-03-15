import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { login } from "./../redux/Auth/action";

let theme = true;

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const auth = useSelector((store) => {
    // console.log(store.AuthReducer.auth);
    return store.AuthReducer.auth;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };

    dispatch(login(userData));

    setEmail("");
    setPassword("");
  };

  return (
    <DIV>
      <h2>User Login</h2>
      <h4>{auth ? "Login Successfull" : "Login to continue"}</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="">Login</button>
      </form>
    </DIV>
  );
};

const DIV = styled.div`
  width: 400px;
  margin: 40px auto;
  border: 1px solid gray;
  padding: 10px;

  // /*h4 {
  //   color: ${theme ? "red" : "black"};
  // }*/

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
  }

  input {
    width: 80%;
    height: 40px;
    font-size: large;
    padding: 5px;
  }

  button {
    width: 20%;
    height: 35px;
  }
`;

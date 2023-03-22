import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { login } from "./../Redux/AuthReducer/action";

const initial = {
  email: "",
  password: "",
};

export const Login = () => {
  const [user, setUser] = useState(initial);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleLogin = () => {
    dispatch(login(user)).then(() => {
      navigate(location.state, { replace: true });
    });
  };

  return (
    <DIV>
      <h2>Log In</h2>
      <input
        data-testid="user-email"
        type="email"
        placeholder="Email"
        name="email"
        onChange={handleChange}
      />
      <input
        data-testid="user-password"
        type="password"
        placeholder="Password"
        name="password"
        onChange={handleChange}
      />
      <button data-testid="user-login" onClick={handleLogin}>
        Log In
      </button>
    </DIV>
  );
};

const DIV = styled.div`
  width: 400px;
  padding: 20px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid gray;
  align-items: center;

  input {
    width: 80%;
    height: 30px;
    font-size: larger;
  }

  button {
    width: 150px;
    height: 30px;
    font-size: large;
  }
`;

import axios from "axios";
import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

export const login = (user)=>(dispatch) => {
  dispatch({type: LOGIN_REQUEST})

  return axios.post(`https://reqres.in/api/login`, user).then((res)=>{
    dispatch({type: LOGIN_SUCCESS, payload: res.data.token});
    // console.log(res.data.token);
  })
  .catch(()=>{
    dispatch({type: LOGIN_ERROR});
  })
};

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.login = login;
}

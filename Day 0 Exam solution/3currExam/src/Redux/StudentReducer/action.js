import axios from "axios";
import {
  STUDENT_REQUEST_FAILURE,
  STUDENT_REQUEST_PENDING,
  STUDENT_REQUEST_SUCCESS,
} from "./actionTypes";

export const getStudents = (obj) => (dispatch) => {
  dispatch({ type: STUDENT_REQUEST_PENDING });
  return axios
    .get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/students`,obj)
    .then((res) => {
      dispatch({ type: STUDENT_REQUEST_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: STUDENT_REQUEST_FAILURE });
    });
};

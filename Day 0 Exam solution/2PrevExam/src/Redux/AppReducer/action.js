import axios from "axios";
import {
  GET_COFFEE_DATA_SUCCESS,
  GET_DATA_FAILED,
  GET_DATA_REQUEST,
  GET_EMPLOYEE_DATA_SUCCESS,
  GET_RESTAURANT_DATA_SUCCESS,
} from "./actionType";

const getCoffee = () => (dispatch) => {
  dispatch({ type: GET_DATA_REQUEST });

  return axios
    .get(
      "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee"
    )
    .then((res) => {
      dispatch({ type: GET_COFFEE_DATA_SUCCESS, payload: res.data.data });
    })
    .catch((e) => {
      dispatch({ type: GET_DATA_FAILED });
    });
};

const getRestaurantData = () => (dispatch) => {
  dispatch({ type: GET_DATA_REQUEST });
  return axios
    .get(
      "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants"
    )
    .then((res) => {
      dispatch({ type: GET_RESTAURANT_DATA_SUCCESS, payload: res.data.data });
    })
    .catch((e) => {
      dispatch({ type: GET_DATA_FAILED });
    });
};

const getEmployeeData = () => (dispatch) => {
  dispatch({ type: GET_DATA_REQUEST });
  return axios
    .get(
      "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees"
    )
    .then((res) => {
      dispatch({ type: GET_EMPLOYEE_DATA_SUCCESS, payload: res.data.data });
    })
    .catch((e) => {
      dispatch({ type: GET_DATA_FAILED });
    });
};

export { getCoffee, getRestaurantData, getEmployeeData };

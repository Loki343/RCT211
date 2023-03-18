import axios from "axios";
import {
  ADD_PRODUCT_SUCCESS,
  EDIT_PRODUCT_SUCCESS,
  GET_PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
} from "./actionTypes";

export const getProduct = (paramObj) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .get("http://localhost:8080/products", paramObj)
    .then((res) => {
      // console.log(res);
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};

export const addProduct = (product) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .post("http://localhost:8080/products", product)
    .then(() => {
      // console.log(res);
      dispatch({ type: ADD_PRODUCT_SUCCESS });
    })
    .catch(() => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};

export const editProduct = (dataObj, id) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  return axios
    .patch(`http://localhost:8080/products/${id}`, dataObj)
    .then(() => {
      // console.log(res);
      dispatch({ type: EDIT_PRODUCT_SUCCESS });
    })
    .catch(() => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};

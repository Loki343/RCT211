import axios from "axios";
import { ADD_PRODUCT_FAILURE, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS } from "./actionTypes";


export const addProduct = (product) => (dispatch) => {
    dispatch({ type: ADD_PRODUCT_REQUEST });
    axios
      .post("http://localhost:8080/products", product)
      .then((res) => {
        // console.log(res);
        dispatch({ type: ADD_PRODUCT_SUCCESS });
      })
      .catch((e) => {
        dispatch({ type: ADD_PRODUCT_FAILURE });
      });
  };
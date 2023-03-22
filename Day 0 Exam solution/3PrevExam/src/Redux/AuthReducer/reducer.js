import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes"

const init ={
    isLoading: false,
    isError: false,
    isAuth: false,
    token: "",
  }

  export const reducer=(state=init, {type, payload})=>{
    switch(type){
        case LOGIN_REQUEST:
            return {...state, isLoading: true}

        case LOGIN_SUCCESS:
            return {...state, isLoading: false, isAuth: true, token: payload}

        case LOGIN_ERROR:
            return {...state, isError: true, isLoading: false}

        default:
            return state
    }
  }
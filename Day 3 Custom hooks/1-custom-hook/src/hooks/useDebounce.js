import { useRef } from "react";


export const useDebounce =()=>{
    let {current: id} = useRef()
  const debounce = (func, delay) => {
    id && clearTimeout(id)
    id = setTimeout(() => {
        func()
    }, delay);
  };
}
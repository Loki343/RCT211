import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Pin from "./Pin";

const PinTab = ({ length, maxChar, setOtp }) => {
  const [pinTabLength] = useState(new Array(length).fill("0"));
  const [pinTabValue] = useState(new Array(length).fill("0"));
  const inputRef = useRef([]);

  const changeHandler = (e, index) => {
    pinTabValue[index] = e.target.value;
    if (index < length - 1 && e.target.value.length === maxChar) {
      inputRef.current[index + 1].focus();
    }
    setOtp(pinTabValue.join(""));
    console.log("PintabValue", pinTabValue);
  };

  const handleBackspace = (e, index) => {
    pinTabValue[index] = e.target.value;
    if (index > 0 && e.target.value.length === 0) {
      inputRef.current[index - 1].focus();
    }
    setOtp(pinTabValue.join(""));
  };

  //for focusing first input box, when the user mounts this component
  useEffect(() => {
    inputRef.current[0].focus();
  }, []);

  return (
    <div>
      {pinTabLength.map((item, index) => {
        return (
          <Pin
            key={index}
            forOnChange={(e) => changeHandler(e, index)}
            forBackspace={(e) => handleBackspace(e, index)}
            maxChar={maxChar}
            ref={(elem) => {
              //here I want to use this ref with prop but it is not allowed so we have to use forwardRef
              inputRef.current[index] = elem;
            }}
          />
        );
      })}
    </div>
  );
};

PinTab.propTypes = {
  length: PropTypes.number.isRequired,
  maxChar: PropTypes.number,
};

export default PinTab;

//Note
//1. here single variable is over-written with multiple ref
//how to store multiple refs together?
//stack,array,object
//ref also can be a call back ref
//they take functions

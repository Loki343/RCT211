import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const PinTab = ({ length, maxChar }) => {
  const [pinTabLength] = useState(new Array(length).fill("0"));

  const inputRef = useRef([]);

  const changeHandler = (e, index) => {
    if (index < length - 1) {
      inputRef.current[index + 1].focus();
    }
  };

  return (
    <div>
      {pinTabLength.map((item, index) => {
        return (
          <input
            key={index}
            maxLength={maxChar}
            ref={(elem) => {
              inputRef.current[index] = elem;
            }}
            onChange={(e) => changeHandler(e, index)}
          />
        );
      })}
    </div>
  );
};

PinTab.propTypes = {
  length: PropTypes.number.isRequired,
  maxChar: PropTypes.number,
}

export default PinTab

//Note
//1. here single variable is over-written with multiple ref
//how to store multiple refs together?
//stack,array,object
//ref also can be a call back ref
//they take functions

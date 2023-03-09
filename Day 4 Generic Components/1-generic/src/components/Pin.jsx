import React, { forwardRef } from "react";

const Pin = forwardRef(({ forOnChange, maxChar, forBackspace }, ref) => {
  const handleKeuUp = (e) => {
    // console.log(e);
    if (e.keyCode === 8) {
      forBackspace(e);
    } else {
      forOnChange(e);
    }
  };
  return (
    <input
      data-testid="pin-input"
      maxLength={maxChar}
      ref={ref}
      //   onChange={forOnChange}
      onKeyUp={handleKeuUp}
    />
  );
});

export default Pin;

//Note
//forward ref is just a simple way to access, the ref property passes down from the parent component to the child component

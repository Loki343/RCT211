import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmployeeData } from "../Redux/AppReducer/action";

export default function EmployeeData() {
  const employeeData = useSelector((store) => store.employeeData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEmployeeData());
  }, []);
  return (
    <div>
      <h2>Employee Data</h2>
      <div
        className="employee_data"
        style={{
          display: "flex",
          gap: "50px",
          margin: "50px",
          flexWrap: "wrap",
        }}
      >
        {employeeData &&
          employeeData.map((item, index) => (
            <div>
              <img src={item.image} alt="img" width="70%" className="image" />
              <div className="name"> {item.name}</div>
              <div className="gender">{item.gender}</div>
              <div className="department">{item.department}</div>
              <div className="salary">{item.salary}</div>
            </div>
          ))}
      </div>
    </div>
  );
}

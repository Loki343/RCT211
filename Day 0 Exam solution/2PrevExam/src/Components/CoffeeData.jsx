import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoffee } from "../Redux/AppReducer/action";

export default function CoffeeData() {
  const coffeeData = useSelector((store) => store.coffeeData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoffee());
  }, []);
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Coffee Data</h2>
      <div
        className="coffee_data"
        style={{
          display: "flex",
          gap: "50px",
          margin: "50px",
          flexWrap: "wrap",
        }}
      >
        {coffeeData &&
          coffeeData.map((item, index) => (
            <div>
              <img src={item.image} alt="img" width="70%" className="image" />
              <div className="title"> {item.title}</div>
              <div className="price">{item.price}</div>
            </div>
          ))}
      </div>
    </div>
  );
}

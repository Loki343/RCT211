import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurantData } from "../Redux/AppReducer/action";

export default function RestaurantData() {
  const restaurantData = useSelector((store) => store.restaurantData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRestaurantData());
  }, []);
  return (
    <div>
      <h2> Restaurant Data </h2>
      <div className="restaurant_data"  style={{
          display: "flex",
          gap: "50px",
          margin: "50px",
          flexWrap: "wrap",
        }}>
        {/* Map the below div against your restaurant Data */}
        {/* show image, name, type, rating and number_of_votes */}
        {restaurantData &&
          restaurantData.map((item, index) => (
            <div>
              <img src={item.image} alt="img" width="70%" className="image" />
              <div className="name"> {item.name}</div>
              <div className="type">{item.type}</div>
              <div className="rating">{item.rating}</div>
              <div className="number_of_votes">{item.number_of_votes}</div>
            </div>
          ))}
      </div>
    </div>
  );
}

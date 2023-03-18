import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const Sidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.getAll("category");
  const [category, setCategory] = useState(initialCategory || []);
  const initialOrder = searchParams.get("order");
  const [order, setOrder] = useState(initialOrder || "");

  const handleChange = (e) => {
    let newCategory = [...category];
    let value = e.target.value;

    if (newCategory.includes(value)) {
      newCategory = newCategory.filter((el) => el !== value);
    } else {
      newCategory.push(value);
    }

    setCategory(newCategory);
    // console.log(category);
  };

  const handleSort = (e) => {
    // console.log(e.target.value);
    setOrder(e.target.value);
  };

  useEffect(() => {
    let params = {
      category,
    };
    order && (params.order = order);
    setSearchParams(params);
  }, [category, order]);

  return (
    <div>
      <h3>Apply Filter</h3>
      <div>
        <input
          type="checkbox"
          value={"male"}
          onChange={handleChange}
          checked={category.includes("male")}
        />
        <label>Men</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"female"}
          onChange={handleChange}
          checked={category.includes("female")}
        />
        <label>Women</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"kids"}
          onChange={handleChange}
          checked={category.includes("kids")}
        />
        <label>Kids</label>
      </div>
      <br />
      <br />
      <h3>Apply sort on Price</h3>
      <div onChange={handleSort}>
        <input
          type="radio"
          name="order"
          value={"asc"}
          defaultChecked={order === "asc"}
        />
        <label>Ascending</label>
        <input
          type="radio"
          name="order"
          value={"desc"}
          defaultChecked={order === "desc"}
        />
        <label>Descending</label>
        <input type="radio" name="order" value={""} />
        <label>Reset</label>
      </div>
    </div>
  );
};

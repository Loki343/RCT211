import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const Sidebar = () => {
  const [searchParams,setSearchParams] = useSearchParams()
  const initialCategory = searchParams.getAll("category")
  const [category, setCategory] = useState( initialCategory || []);

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

  useEffect(() => {
    let params = {
      category,
    };
    setSearchParams(params)
  }, [category]);

  return (
    <div>
      <h3>Apply Filter</h3>
      <div>
        <input type="checkbox" value={"male"} onChange={handleChange} checked={category.includes("male")}/>
        <label>Men</label>
      </div>
      <div>
        <input type="checkbox" value={"female"} onChange={handleChange} checked={category.includes("female")}/>
        <label>Women</label>
      </div>
      <div>
        <input type="checkbox" value={"kids"} onChange={handleChange} checked={category.includes("kids")}/>
        <label>Kids</label>
      </div>
    </div>
  );
};

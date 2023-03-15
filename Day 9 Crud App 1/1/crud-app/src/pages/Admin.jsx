import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/Product/action";

const initialState = {
  image: "",
  title: "",
  price: "",
  brand: "",
  discount: "",
  category: "",
};

export const Admin = () => {
  const [product, setProduct] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProduct(initialState);
    dispatch(addProduct(product));
    // console.log(product);
  };

  return (
    <DIV>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Image"
          value={product.image}
          name="image"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          placeholder="Add Title"
          value={product.title}
          name="title"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          placeholder="Add Price"
          value={product.price}
          name="price"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          placeholder="Add Brand"
          value={product.brand}
          name="brand"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          placeholder="Add Discount"
          value={product.discount}
          name="discount"
          onChange={(e) => handleChange(e)}
        />
        <select
          name="category"
          value={product.category}
          onChange={(e) => handleChange(e)}
        >
          <option value="">Select Category</option>
          <option value="male">Men</option>
          <option value="female">Women</option>
          <option value="kids">Kids</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </DIV>
  );
};

const DIV = styled.div`
  width: 400px;
  margin: 40px auto;
  border: 1px solid gray;
  padding: 10px;

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
  }

  input {
    width: 80%;
    height: 40px;
    font-size: large;
    padding: 5px;
  }

  button {
    width: 20%;
    height: 35px;
  }

  select{
    width:50%
    height:30px;
    font-size:large;
  }
`;

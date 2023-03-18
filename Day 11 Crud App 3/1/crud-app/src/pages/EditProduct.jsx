import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { editProduct } from "../redux/Product/action";
import { getProduct } from "./../redux/Product/action";

const EditProduct = () => {
  const { id } = useParams();

  const [data, setData] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate()

  const dispatch = useDispatch();

  const product = useSelector((store) => {
    // console.log(store);
    return store.productReducer.products;
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    console.log(data);
    const payload = { ...data, price: Number(data.price) };
    dispatch(editProduct(payload, id)).then(() => {
      setSuccess(true);
      navigate('/')
    });
  };

  useEffect(() => {
    const data = product.find((el) => el.id === +id);
    setData(data);
    // console.log(data);
  }, []);

  return (
    <DIV>
      <h3>Edit Product: {id}</h3>
      <h2>{success && "Product editted successful"}</h2>
      <form onSubmit={handleEdit}>
        <input
          type="text"
          name="image"
          onChange={handleChange}
          value={data.image}
        />
        <input
          type="text"
          name="title"
          onChange={handleChange}
          value={data.title}
        />
        <input
          type="number"
          name="price"
          onChange={handleChange}
          value={data.price}
        />
        <input
          type="text"
          name="brand"
          onChange={handleChange}
          value={data.brand}
        />
        <input
          type="text"
          name="discount"
          onChange={handleChange}
          value={data.discount}
        />
        <select value={data.category} name="category" onChange={handleChange}>
          <option value="">Select Category</option>
          <option value="male">Men</option>
          <option value="female">Woman</option>
          <option value="kids">Kids</option>
        </select>
        <button type="submit">Edit</button>
      </form>
    </DIV>
  );
};

export default EditProduct;

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

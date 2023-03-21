import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../redux/Product/action";
import { getProduct } from './../redux/Product/action';

export const ProductCard = ({
  id,
  image,
  title,
  price,
  brand,
  discount,
  category,
}) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteProduct(id)).then(()=>{
      dispatch(getProduct())
    })
  };

  return (
    <DIV>
      <img src={image} alt="prod" />
      <h3>{title}</h3>
      <h3>Price: {price}</h3>
      <p>Brand: {brand}</p>
      <p>Discount:{discount}</p>
      <p>Category:{category}</p>
      <button>
        <Link to={`/edit/${id}`}>Edit</Link>
      </button>
      <button onClick={handleDelete}>Delete</button>
    </DIV>
  );
};

const DIV = styled.div`
  border: 1px solid black;
  padding: 10px;
  width: 300px;
  img {
    width: 100%;
    height: 200px;
  }
`;

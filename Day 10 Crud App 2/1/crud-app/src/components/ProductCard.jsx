import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

export const ProductCard = ({
  id,
  image,
  title,
  price,
  brand,
  discount,
  category,
}) => {
  return (
    <DIV>
      <img src={image} alt="prod" />
      <h3>{title}</h3>
      <h3>Price: {price}</h3>
      <p>Brand: {brand}</p>
      <p>Discount:{discount}</p>
      <p>Category:{category}</p>
      <button >
        <Link to={`/edit/${id}`}>Edit</Link>
      </button>
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

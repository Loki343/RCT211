import React from "react";
import styled from "styled-components";

export const CartCard = ({
  thumbnil,
  title,
  brand,
  price,
  discountPercentage,
}) => {
  return (
    <DIV className="product-card">
      <img src={thumbnil} alt="prod-img" className="product-image" />
      <h3 className="product-title">{title}</h3>
      <p className="product-brand">{brand}</p>
      <p className="product-price">{price}</p>
      <p className="product-discount">{discountPercentage}</p>
    </DIV>
  );
};

const DIV = styled.div`
 
`;

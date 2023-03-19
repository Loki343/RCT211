import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addToCart } from "./../Redux/CartReducer/action";

export const ProductCard = ({
  id,
  thumbnil,
  title,
  brand,
  price,
  discountPercentage,
}) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(id));
  };

  return (
    <DIV className="product-card">
      <img src={thumbnil} alt="prod-img" className="product-image" />
      <h3 className="product-title">{title}</h3>
      <p className="product-brand">{brand}</p>
      <p className="product-price">{price}</p>
      <p className="product-discount">{discountPercentage}</p>
      <button onClick={addToCartHandler} className="add-to-cart">
        ADD To Cart
      </button>
    </DIV>
  );
};

const DIV = styled.div`
 border: 1px solid black
`;

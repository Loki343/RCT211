import { useSelector } from "react-redux";
import styled from "styled-components";
import { CartCard } from "../Components/CartCard";

export const CartPage = () => {
  const cartItems = useSelector((store) => store.cartReducer.cart);
  return (
    <div>
      <DIV data-testid="cart-list">
        {cartItems.length > 0 &&
          cartItems.map((el) => {
            return <CartCard key={el.id} {...el} />;
          })}
      </DIV>
    </div>
  );
};

const DIV = styled.div`
  margin: 10px;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 10px;
`;

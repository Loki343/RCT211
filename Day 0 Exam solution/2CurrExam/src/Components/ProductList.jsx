import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getProducts } from "../Redux/ProductReducer/action";
import { ProductCard } from "./ProductCard";

export const ProductList = () => {
  const products = useSelector((store) => {
    console.log(store);
    return store.productReducer.products;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <DIV data-testid="product-list">
      {products.length > 0 &&
        products.map((el) => {
          return <ProductCard key={el.id} {...el} />;
        })}
    </DIV>
  );
};

const DIV = styled.div`
  margin: 10px;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 10px;
`;

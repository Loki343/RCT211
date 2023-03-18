import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { getProduct } from "../redux/Product/action";
import { ProductCard } from "./ProductCard";

export const ProductList = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.productReducer);
  const location = useLocation();
  const [searchParams] = useSearchParams();

  // console.log(searchParams.getAll("category"));

  let paramObj = {
    params: {
      category: searchParams.getAll("category"),
      _sort: searchParams.get("order") && "price",
      _order: searchParams.get("order"),
    },
  };

  useEffect(() => {
    dispatch(getProduct(paramObj));
  }, [location.search]);

  return (
    <DIV>
      {products.length > 0 &&
        products.map((el) => <ProductCard key={el.id} {...el} />)}
    </DIV>
  );
};

const DIV = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 80px;
  margin: 30px auto;
  justify-content: center;
`;

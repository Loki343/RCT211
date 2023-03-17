import React from "react";
import styled from "styled-components";
import { ProductList } from "../components/ProductList";
import { Sidebar } from "../components/Sidebar";

export const Homepage = () => {
  return (
    <DIV>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="productlist">
        <ProductList />
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  display: flex;

  .sidebar {
    width: 15%;
    border-right: 1px solid gray;
    padding: 30px;
  }
  .productlist {
    width: 85%;
  }
`;

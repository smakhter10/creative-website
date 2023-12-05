import React, { useState } from "react";
import styled from "styled-components";
import Heading from "../components/Heading";
//import data from "../data/data.json";
import ItemCard from "../components/ItemCard";
import Buttons from "../components/Buttons";
import Products from "../data/product";

const Product = () => {
  const [item, setItem] = useState(Products);

  const filterItems = (cat) => {
    const newItems = Products.filter((newval) => {
      return newval.category === cat;
    });
    setItem(newItems);
  };

  return (
    <ProductWrap>
      <Heading text="PRODUCTS" />
      <Buttons filterItems={filterItems} setItem={setItem} />
      <ItemCard productList={item} />
    </ProductWrap>
  );
};

const ProductWrap = styled.div`
  @media (max-width: 750px) {
    margin-bottom: 40vmax;
  }

  @media (max-width: 1023px){
    margin-bottom: 24vmax;
  }
`;

export default Product;

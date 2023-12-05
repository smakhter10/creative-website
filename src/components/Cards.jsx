import React from "react";
import styled from "styled-components";
import ItemCard from "./ItemCard";

const Cards = ({ name, image, index }) => {
  return (
    <Card>
      <div>
        <img src={image} alt={`${index} product`} />
        <p>{name}</p>
      </div>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  width: auto;
  margin: 0.7vmax;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    box-shadow: 6px 6px 15px gray;
    transform: translateY(-4px);
  }

  img {
    width: 25vmax;
    height: 30vmax;
  }

  p {
    display: flex;
    justify-content: center;
    margin: 10px 0;
    font-size: 1.4rem;
    font-weight: bold;
  }
  span {
    color: orangered;
    font-weight: bold;
  }

  @media (max-width: 750px) {
    &:hover {
      box-shadow: none;
      transform: translateY(0);
    }
  }
`;

export default Cards;

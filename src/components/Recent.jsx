import React from "react";
import styled from "styled-components";
import Cards from "./Cards";

const Recent = ({ recent }) => {
  return (
    <RecentWrap>
      {recent.map((item, index) => (
        <Cards
          key={item.image}
          name={item.name}
          image={item.image}
          index={item.index}
        />
      ))}
    </RecentWrap>
  );
};

const RecentWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;


  @media (max-width: 750px){
    overflow-x: auto;
    justify-content: start;
  }
`;

export default Recent;

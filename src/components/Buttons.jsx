import React from "react";
import styled from "styled-components";
import data from "../data/data.json";

const Buttons = ({ menuItems, filterItems, setItem }) => {
  return (
    <ButtonWrap>
      <div className="menu-tabs">
        <button className="menu-tab" onClick={() => setItem(data.products)}>
          All
        </button>
        <button className="menu-tab" onClick={() => filterItems("scrapbook")}>
          scrapbook
        </button>
        <button className="menu-tab" onClick={() => filterItems("bottlepaint")}>
          bottle paint
        </button>
        <button className="menu-tab" onClick={() => filterItems("canvas")}>
          canvas
        </button>
        <button
          className="menu-tab"
          onClick={() => filterItems("event decoration")}
        >
          event decoration
        </button>
        <button className="menu-tab" onClick={() => filterItems("giftbox")}>
          gift box
        </button>
      </div>
    </ButtonWrap>
  );
};

const ButtonWrap = styled.div`
  .menu-tabs {
    display: flex;
    align-items: center;
    justify-content: center;

    .menu-tab {
      font-size: 1.1rem;
      padding: 10px;
      width: 200px;
      margin: 0px 20px;
      border-radius: 30px;
      text-transform: uppercase;
      
      transition: all 300ms;

      &:hover {
        background-color: pink;
        transform: translateY(-5px);
      }
    }
  }

  @media (min-width: 0px) and (max-width: 1023px){
    .menu-tabs{
      margin: 10px -10px;

      &:active {
        color: pink;
      }

      .menu-tab{
        margin-top: 15px;
      }
    }
  
  }

  @media (max-width: 750px){
    .menu-tabs{
      margin: 20px 0;
      flex-direction: column;

      &:active {
        color: pink;
      }

      .menu-tab{
        margin-top: 15px;
      }
    }
  }
`;

export default Buttons;

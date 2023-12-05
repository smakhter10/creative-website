import React from "react";
import styled from "styled-components";

const ItemCard = ({ productList }) => {
  return (
    <CardWrap>
      <div className="wrapper">
        {productList.map((item, index) => (
          <div key={item.name}>
            <div className="card">
              <img src={item.image} alt={item.category} />
              <div className="info">
                <p> {item.category} </p>
                <span> {item.description} </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </CardWrap>
  );
};

const CardWrap = styled.div`
  margin: 50px 0 20px 0;
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .card {
    background-color: #ff6a6a;
    width: 26vmax;
    margin: 0.7vmax;
    cursor: pointer;
    transition: all 0.5s;

    &:hover {
      //box-shadow: 6px 6px 15px gray;
      transform: translateY(-4px);

      .info{
        visibility: visible;
      }

      img {
        filter: blur(2px);
      }
    }

    img {
      padding: 6px;
      width: 26vmax;
      height: 30vmax;
      transition: all 0.3s;
    }

    .info {
      background-color: #ff6a6a;
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      bottom: 0px;
      visibility: hidden;
      padding: 10px;

      p {
        text-transform: uppercase;
        font-size: 1.4rem;
        font-weight: bold;
        color: black;
      }
      span {
        color: white;
      }
      
    }
  }

  @media (max-width: 750px){
    .wrapper{
      margin-top: 10vmax;
    }

    .card {
      margin-top: 5vmax;
    }
  }
`;

export default ItemCard;

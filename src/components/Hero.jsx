import React from "react";
import styled from "styled-components";

const Hero = ({ image, title, subtitle, text, aboutText }) => {
  return (
    <AboutContainer>
      <div className="aboutinfo">
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <p>{text}</p>
        <p>{aboutText}</p>
      </div>
      <div className="aboutimg">
        <img src={image} alt="about" />
      </div>
    </AboutContainer>
  );
};

const AboutContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 290px;
  height: 100vh;

  body {
    overflow-x: hidden;
  }

  .aboutinfo {
    display: flex;
    flex-direction: column;
    width: 40%;
    h1 {
      display: block;
      margin: 0 auto;
      font-size: 4rem;
      margin-left: 0px;
      margin-bottom: 50px;
      border-bottom: 2px solid #f1b4bb;
    }

    h3 {
      font-size: 1.5rem;
      font-weight: 400;
      margin-bottom: 15px;
    }

    p {
      font-size: 1.4rem;
      font-weight: 300;
      word-wrap: normal;
    }
  }

  .aboutimg {
    margin-top: 110px;
    margin-left: 50px;

    img {
      height: 50vh;
      width: auto;
    }
  }

  @media (min-width: 0px) and (max-width: 1023px) {
    flex-direction: column;
    padding-bottom: 0px;
    .aboutinfo {
      width: 70%;
      h3 {
        font-size: 1.7rem;
      }
      p {
        font-size: 1.5rem;
      }
    }
    .aboutimg {
      margin-top: 0px;
      margin-left: 0px;

      img {
        height: auto;
        width: 100%;
      }
    }
  }

  @media (max-width: 750px){
    height: auto;
    margin-bottom: 25vmax;
    margin-top: 10vmax;
    .aboutinfo {
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
      h3 {
        font-size: 1.7rem;
      }
      p {
        font-size: 1.5rem;
      }
    }

    .aboutimg {
      margin-top: 5vmax;
    }
  }

`;

export default Hero;

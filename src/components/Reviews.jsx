import React from "react";
import styled from "styled-components";
import Slider from "./Slider";

const Reviews = () => {
  return (
    <ReviewWrap>
      <div className="slider">
        <a
          href="https://www.facebook.com/profile.php?id=100050564601352&sk=reviews"
          target="_blank"
        >
          <Slider />
        </a>
      </div>
    </ReviewWrap>
  );
};

const ReviewWrap = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  margin-bottom: 50px;

  .slider {
    background-color: #16254d;
    border-radius: 10px;
    padding: 20px;
  }
`;

export default Reviews;

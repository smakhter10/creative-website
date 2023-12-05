import React from "react";
import styled from "styled-components";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterWrap>
      <div className="mainFooter">
        <div className="social">
          <h3>Social</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=100050564601352" target="_blank">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <FaInstagram />
            </a>
            <a href="https://www.twitter.com/" target="_blank">
              <FaTwitter />
            </a>
          </div>
        </div>

        <div className="contact">
          <h3>Contact Us</h3>
          <p>creative@gmail.com</p>
        </div>

        <div className="terms">
          <p>Terms and Condition</p>
          <p>Privacy Policy</p>
        </div>
      </div>

      <div className="copyright">
        <div>
          <FaRegCopyright /> <span>Creative</span>
        </div>
      </div>
    </FooterWrap>
  );
};

const FooterWrap = styled.footer`
  background-color: #191919;
  color: white;
  z-index: 1000;
  padding-top: 20px;

  .mainFooter {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding-bottom: 10px;
    .social {
      display: flex;
      flex-direction: column;
      align-items: center;
      a {
        text-decoration: none;
        color: white;
        font-size: 25px;
        margin: 5px;
      }
    }

    .contact{
        display: flex;
      flex-direction: column;
      align-items: center;
      
      p{
        margin-top: -6px;
      }
    }

    .terms{
        p{
            cursor: pointer;
        }
    }
  }

  .copyright {
    background-color: black;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #61A3BA;

      span {
        margin-left: 10px;
      }
    }
  }

  @media (max-width: 750px){
    position: absolute;
    width: 100%;
    .mainFooter{
      
      h3{
          font-size: 20px;
        }
        p{
          font-size: 13px;
        }
      .social{
        a{
          font-size: 15px;
        }
      }

      .contact{
        p{
          transform: translateY(10px);
        }
      }
      .terms{
        transform: translateY(5px);
      }
    }
  }
`;

export default Footer;

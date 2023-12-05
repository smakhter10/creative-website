import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <ContactWrap>
      <div className="heading">
        <h1>CONTACT US</h1>
      </div>
      <div className="contents">
        <div className="facebook">
          <img src="./pictures/send-message.png" alt="" />
          <h3>Send Us a Message on Facebook</h3>
          <a
            href="https://www.facebook.com/messages/t/2328892647341349"
            target="_black"
          >
            Send Message
          </a>
        </div>
        
        <div className="email">
          <img src="./pictures/email.svg" alt="" />
          <form action=" " method="POST" className="contact-inputs">
            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="message"
              cols="30"
              rows="6"
              autoComplete="off"
              required
            ></textarea>

            <input type="submit" value="send" />
          </form>
        </div>

        <div className="number">
          <img src="./pictures/send-msg.svg" alt="" />
          <h3>Give Us a Call to Order</h3>
          <p>(+880)1957-983365</p>
        </div>
      </div>
    </ContactWrap>
  );
};

const ContactWrap = styled.div`
  color: white;
  padding: 20px;

  img {
    padding: 20px 0px;
    width: auto;
    height: 20vmax;
  }

  h3 {
      margin-bottom: 30px;
    }

  .heading {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0 50px 0;
  }
  .contents {
    display: flex;
    margin-bottom: 20px;
  }

  .facebook {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 33%;

    a {
      text-decoration: none;
      color: black;
      background-color: pink;
      padding: 8px;
      font-size: 18px;

      &:hover {
        background-color: pink;
        border: 1px solid black;
        color: black;
        transform: scale(0.9);
      }
    }
  }

  .number {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 33%;

    p {
      font-size: 1.2rem;
      color: pink;
    }
  }

  .email {
    width: 30%;

    .contact-inputs {
      display: flex;
      flex-direction: column;
      gap: 30px;

      input[type="submit"] {
        cursor: pointer;
        background-color: pink;
        transition: all 0.2s;

        &:hover {
          border: 1px solid black;
          transform: scale(0.9);
        }
      }
    }
  }

  @media (max-width: 1023px) {
    h3 {
      margin-bottom: 20px;
      font-size: 20px;
    }

    img {
      width: 250px;
    }
    .contents {
      display: flex;
      margin-bottom: 20px;
      height: 100vh;
    }
  }

  @media (max-width: 750px){
    height: 1540px;
    margin-top: 60px;
    h3 {
      margin-bottom: 10px;
      font-size: 20px;
    }

    img {
      width: 250px;
      height: 250px;
    }
    .contents {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
      height: auto ;


      .email {
        width: auto;
        height: auto;
        margin-bottom: 50px;
      }

      .number {
        width: auto;
        height: auto;
        margin-bottom: 50px;
      }

      .facebook {
        width: auto;
        height: auto;
        margin-bottom: 50px;
      }
    }
  }
`;

export default Contact;

import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Navigation>
      <div className="logo">
        <Link className="logolink" to="/">
          <img src="./pictures/data/logo.jpg" alt="logo" />
        </Link>
      </div>
      <div className={openMenu ? "menu active" : "menu"}>
        <div className="navlink">
          <Link className="menulink" onClick={() => setOpenMenu(false)} to="/">
            HOME
          </Link>
          <Link className="menulink" onClick={() => setOpenMenu(false)} to="/products">
            PRODUCTS
          </Link>
          <Link className="menulink" onClick={() => setOpenMenu(false)} to="/aboutus">
            ABOUT US
          </Link>
          <Link className="menulink" onClick={() => setOpenMenu(false)} to="/contactus">
            CONTACT US
          </Link>
        </div>
        <div className="mobile">
          <i>
            <FaBars
              name="menu-outline"
              className="open-outline mobile-nav-icon"
              onClick={() => setOpenMenu(true)}
            />
          </i>
          <IoCloseSharp
            name="close-outline"
            className="close-outline mobile-nav-icon"
            onClick={() => setOpenMenu(false)}
          />
        </div>
      </div>
    </Navigation>
  );
};

const Navigation = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fdf0f0;
  height: 105px;

  .logo {
    .logolink {
      text-decoration: none;
    }
    h1 {
      color: #ffffdd;
      margin: 0 0 0 40px;
      font-size: 2.2rem;
    }

    img {
      height: 90px;
      margin: 0 0 0 60px;
      width: auto;
      border-radius: 50%;
    }
  }

  .menu {
    margin-right: 120px;

    .menulink {
      text-decoration: none;
      color: black;
      font-size: 1.3rem;
      list-style: none;
      margin: 0 10px;
      transition: all 250ms;
    }

    .menulink:hover {
      color: #f1b4bb;
      border-bottom: 2px solid #f1b4bb;
    }
  }
  .menubar {
    color: black;
  }

  .mobile {
    display: none;
  }

  @media (max-width: 768px) {
    .mobile {
      display: inline-block;
      z-index: 1000;
      color: black;
      font-size: 1.4rem;
    }
    .close-outline {
      display: none;
    }

    .navlink {
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      background-color: white;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      visibility: hidden;
    }

    .menulink {
      font-weight: 500;
    }

    .open-outline{
      transform: translateX(60px);
    }

    .active .mobile-nav-icon {
      display: none;
      font-size: 2.2rem;
      position: absolute;
      transform: translateY(-13px);
      right: 50px;
      z-index: 9999;
    }

    .active .close-outline {
      display: inline-block;
    }

    .active .navlink {
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header class="main-header">
      <nav class="nav main-nav">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/store"}>Store</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact us</Link>
          </li>
          <li>
            <Link to={"/about"}>About us</Link>
          </li>
          <li>
            <Link to={"/cart"}>Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

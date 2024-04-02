import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  // TO GET VALUE
  const items = useSelector((state) => state.cart);

  return (
    <div className="navbar-wrapper">
      <span className="logo">Redux Store</span>
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/cart">
          Cart
        </Link>
        <span className="cartCount">Cart Item: {items.length}</span>
      </div>
    </div>
  );
};

export default Navbar;

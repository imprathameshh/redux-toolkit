import React from "react";
import Products from "../components/Products";

const Home = () => {
  return (
    <>
      <div className="title-wrap">
        <h2 className="heading">Welcome to Redux-Toolkit</h2>
      </div>
      <section>
        <h3>Products</h3>
        <Products />
      </section>
    </>
  );
};

export default Home;

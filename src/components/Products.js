import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { STATUSES, fetchProducts } from "../store/productSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  // LOADING A STATE
  if (status === STATUSES.LOADING) {
    return <h2>Loading...</h2>;
  }
  // ERROR HANDLER
  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong</h2>;
  }
  const handleAdd = (product) => {
    dispatch(add(product));
  };

  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <div className="img-wrap">
            <img src={product.image} alt="product-img" />
          </div>
          <div className="card-conten">
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
          </div>
          <div className="btn-wrap">
            <button className="btn" onClick={() => handleAdd(product)}>
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;

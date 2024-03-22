import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";
const Products = () => {
  // FETCHING API START
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const apiFetch = await fetch("https://fakestoreapi.com/products");
      const data = await apiFetch.json();
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);
  // FETCHING API END

  // REDUX TOOLKIT START
  const dispatch = useDispatch();
  const handleAdd = (product) => {
    // PRODUCT WILL BE STORE IN STORE
    dispatch(add(product));
  };
  // REDUX TOOLKIT END

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

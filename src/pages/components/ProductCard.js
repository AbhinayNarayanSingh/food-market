import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ n, screen }) => {
  return (
    <div className="product-card-container">
      <img src={n.img} alt="" />
      <div>
        <h2>{n.title}</h2>
        <p>INR {n.price}.00</p>
      </div>
      <h3>
        {screen === "home" ? (
          <Link to="?">
            <i className="fa-solid fa-cart-arrow-down"></i>
          </Link>
        ) : (
          <Link to="?">
            <i className="fa-solid fa-trash"></i>
          </Link>
        )}
      </h3>
    </div>
  );
};

export default ProductCard;

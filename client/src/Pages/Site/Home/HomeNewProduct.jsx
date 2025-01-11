import React from "react";
import { Link } from "react-router-dom";
import "./HomeNewCard.scss";


const HomeNewProduct = ({ product }) => {
  return (
    <Link className="newProductCard" to={product._id}>
      <div className="new__product__banner" style={{ backgroundImage: `url(${product.imgBanner})` }}>
        <p className="new__product__banner--p new__product__banner--p1">
          {product.name}
        </p>
        <p className="new__product__banner--p new__product__banner--p2">
          {product.descBanner}
        </p>
      </div>
    </Link>
  );
};

export default HomeNewProduct;

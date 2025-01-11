import React from "react";
import "./StoreCard.scss"
import {BiSearchAlt} from "react-icons/bi"
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

const StoreCard = ({product}) => {
  return (
    <Link className="shopProductCard" to={product._id}>
        <div className="shopProductCard--top">
          <img
            src={product.imgCard}
            alt=""
          />
        </div>
        <div className="shopProductCard--bottom">
          <div className="shopProductCard-name">
            <p>{product.name}</p>
          </div>
          <div className="shopProductCard-desc">
            <p>
            {product.descCard}
            </p>
          </div>
          <div className="shopProductCard-priceAdd">
            <div className="shopProductCard-priceAdd-left">
              <p>From</p>
              <p>US${product.price}</p>
            </div>
            <div className="shopProductCard-priceAdd-right">
              <button>
                <BiSearchAlt className="addToCardIco" />
              </button>
              <button>
                <AiOutlineShoppingCart className="addToCardIco" />
              </button>
            </div>
          </div>
        </div>
    </Link>
  );
};

export default StoreCard;

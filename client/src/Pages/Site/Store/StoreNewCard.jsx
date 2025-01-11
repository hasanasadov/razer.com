import React from "react";
import "./StoreNewCard.scss"
import {BiSearchAlt} from "react-icons/bi"
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

const StoreNewCard = ({newProduct}) => {
  return (
    <Link className="shopProductCard" to={newProduct._id}>
        <div className="shopProductCard--top">
          <img
            src={newProduct.imgCard}
            alt=""
          />
        </div>
        <div className="shopProductCard--bottom">
          <div className="shopProductCard-name">
            <p>{newProduct.name}</p>
          </div>
          <div className="shopProductCard-desc">
            <p>
            {newProduct.descCard}
            </p>
          </div>
          <div className="shopProductCard-priceAdd">
            <div className="shopProductCard-priceAdd-left">
              <p>From</p>
              <p>US${newProduct.price}</p>
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

export default StoreNewCard;

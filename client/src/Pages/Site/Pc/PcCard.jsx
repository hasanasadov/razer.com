import React from "react";
import "./PcCard.scss";
import { BiSearchAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

const PcCard = ({ product }) => {
  return (
    <Link className="PcCard" to={product._id}>
      <div className="PcCard--top">
        <img
          src={product.imgCard}
          alt=""
        />
      </div>
      <div className="PcCard--bottom">
        <div className="PcCard-name">
          <p>{product.name}</p>
        </div>
        <div className="PcCard-desc">
          <p>
          {product.cardDesc}
          </p>
        </div>
        <div className="PcCard-priceAdd">
          <div className="PcCard-priceAdd-left">
            <p>From</p>
            <p>US${product.price}</p>
          </div>
          <div className="PcCard-priceAdd-right">
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

export default PcCard;

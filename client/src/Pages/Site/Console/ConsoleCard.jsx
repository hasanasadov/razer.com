import React from "react";
import "./ConsoleCard.scss"
import {BiSearchAlt} from "react-icons/bi"
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

const ConsoleCard = ({product}) => {
  return (
    <Link className="consoleCard" to={product._id}>
        <div className="consoleCard--top">
          <img
            src={product.imgCard}
            alt=""
          />
        </div>
        <div className="consoleCard--bottom">
          <div className="consoleCard-name">
            <p>{product.name}</p>
          </div>
          <div className="consoleCard-desc">
            <p>
            {product.descCard}
            </p>
          </div>
          <div className="consoleCard-priceAdd">
            <div className="consoleCard-priceAdd-left">
              <p>From</p>
              <p>US${product.price}</p>
            </div>
            <div className="consoleCard-priceAdd-right">
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

export default ConsoleCard;

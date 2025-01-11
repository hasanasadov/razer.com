import React from "react";
import "./MobileCard.scss"
import {BiSearchAlt} from "react-icons/bi"
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

const product ={
    name:"NEW RAZER BLADE 14",
    descCard: "NVIDIA® GeForce RTX™ 40 Series 14” Laptop with AMD Ryzen 9 7940HS Processor.",
    imgCard: "https://assets3.razerzone.com/HWyBrdi1Zay37XldxX3Y1O4puOg=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhb7%2Fh1b%2F9539342008350%2Fblade14-p9-black-500x500.png",
    price:2399.99,
    category:"pc",
    _id:"123",
  }

const MobileCard = ({product}) => {
  return (
    <Link className="mobileCard" to={product._id}>
        <div className="mobileCard--top">
          <img
            src={product.imgCard}
            alt=""
          />
        </div>
        <div className="mobileCard--bottom">
          <div className="mobileCard-name">
            <p>{product.name}</p>
          </div>
          <div className="mobileCard-desc">
            <p>
            {product.descCard}
            </p>
          </div>
          <div className="mobileCard-priceAdd">
            <div className="mobileCard-priceAdd-left">
              <p>From</p>
              <p>US${product.price}</p>
            </div>
            <div className="mobileCard-priceAdd-right">
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

export default MobileCard;

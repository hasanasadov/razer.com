import React, { useEffect, useState } from "react";
import "./Console.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import Loader from "../../../Components/Loader/Loader";
import MetaData from "../../../Layout/Site/Header/MetaData";
import ConsoleCard from "./ConsoleCard";
import axios from "axios";
const product ={
  name:"NEW RAZER BLADE 14",
  descCard: "NVIDIA® GeForce RTX™ 40 Series 14” Laptop with AMD Ryzen 9 7940HS Processor.",
  imgCard: "https://assets3.razerzone.com/HWyBrdi1Zay37XldxX3Y1O4puOg=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhb7%2Fh1b%2F9539342008350%2Fblade14-p9-black-500x500.png",
  price:2399.99,
  category:"pc",
  _id:"123",
}

const Console = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    window.scrollTo({ top: 0 });
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:7777/api/v1/product/").then((res) => {
      console.log(res.data.product )
      setData(res.data.product);
    }).catch((error) => {
            console.error("Error fetching data:", error);
  });
 }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section>
          <MetaData title="Console" />

          <div className="console">
            <div className="console__hero">
              <p>CONSOLE GAMING</p>
              <p>
                Whatever gaming console you own, make your setup truly next-gen
                with our expansive arsenal of high-performance hardware. From
                immersive audio gear and essential accessories to multi-platform
                PC gaming controllers, secure the upgrades you need to achieve
                your perfect PlayStation 5, Xbox Series X|S, or Nintendo Switch
                loadout.
              </p>
            </div>
            <div className="console__new">
              <p>RAZER WOLVERINE V2 PRO</p>
              <p>Wireless Pro Gaming Controller for PS5™ and PC</p>
            </div>
            <div className="console__vitrine">
            {data.map((item, index) => {
                if(item.category === "console")
                {
                  return (
                    <div key={index} className="console__vitrine__card">
                    <div className="console__vitrine__card--top">
                    {
                          item.imgCard.map(img=>{
                            return(
                              <img src={img.url} alt="" />
                            )
                          })
                        } 
                    </div>
                    <div className="console__vitrine__card--bottom">
                      <div className="console__vitrine__card-name">
                        <p>{item.name}</p>
                      </div>
                      <div className="console__vitrine__card-desc">
                        <p>
                        {item.descCard}
                        </p>
                      </div>
                      <div className="console__vitrine__card-priceAdd">
                        <div className="console__vitrine__card-priceAdd-left">
                          <p>From</p>
                          <p>US${item.price}</p>
                        </div>
                        <div className="console__vitrine__card-priceAdd-right">
                          <button>
                            <BiSearchAlt className="addToCardIco" />
                          </button>
                          <button>
                            <AiOutlineShoppingCart className="addToCardIco" />
                          </button>
                        </div>
                      </div>
                    </div>
                </div>
                  )
                }
                ;
              })}
            </div>
            <div className="console__limited">
              <p>RAZER LIMITED EDITION</p>
              <p>
                Officially Licensed Xbox Controller and Quick Charging Stand
              </p>
            </div>
            <div className="console__sonic">
              <p>SONIC THE HEDGEHOG LIMITED EDITION</p>
              <p>
                Officially Licensed Xbox Controller and Quick Charging Stand
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Console;

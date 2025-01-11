import React, { useEffect, useState } from "react";
import Loader from "../../../Components/Loader/Loader";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Mobile.scss";
import MetaData from "../../../Layout/Site/Header/MetaData";
import axios from "axios";
const Mobile = () => {
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

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:7777/api/v1/product/")
  //     .then((res) => {
  //       console.log(res.data); // Check the response in the console
  //       setData(res.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section>
          <MetaData title="Mobile" />

          <div className="mobile">
            <div className="mobile__hero">
              <p>ENGINEERED FOR THE GAME, DESIGNED FOR LIFE</p>
              <p>
                This is freedom of play, redefined. Our mobile gaming and
                lifestyle audio products are crafted to seamlessly integrate
                gaming into every aspect of your life.
              </p>
            </div>
            <div className="mobile__new">
              <p>RAZER EDGE</p>
              <p>The Ultimate Android Gaming Handheld</p>
            </div>
            <div className="mobile__vitrine">
              {data.map((item, index) => {
                if(item.category === "mobile")
                {
                  return (
                    <div key={index} className="mobile__vitrine__card">
                      <div className="mobile__vitrine__card--top">
                      {
                          item.imgCard.map(img=>{
                            return(
                              <img src={img.url} alt="" />
                            )
                          })
                        } 
                      </div>
                      <div className="mobile__vitrine__card--bottom">
                        <div className="mobile__vitrine__card-name">
                          <p>{item.name}</p>
                        </div>
                        <div className="mobile__vitrine__card-desc">
                          <p>{item.descCard}</p>
                        </div>
                        <div className="mobile__vitrine__card-priceAdd">
                          <div className="mobile__vitrine__card-priceAdd-left">
                            <p>From</p>
                            <p>US${item.price}</p>
                          </div>
                          <div className="mobile__vitrine__card-priceAdd-right">
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
            <div className="mobile__sync">
              <p>STAY IN-SYNC WITH YOUR WORLD</p>
              <p>
                Whether you’re working from home or immersed in entertainment,
                our industry-leading Bluetooth low-latency audio deliver smooth,
                stutter-free sound and seamless connectivity.
              </p>
            </div>
            <div className="mobile__extra">
              <p>GO THE EXTRA MILE</p>
              <p>
                When you’re filling those few minutes in line at the coffee shop
                or commuting to work with a quick game or listening to that
                banger on repeat, Razer has the accessory that lets fellow
                gamers know they’re among their own.
              </p>
            </div>
            <div className="mobile__experience">
              <p>
                RAZER MOBILE GAMING ACCESSORIES: REDEFINING THE GAMING
                EXPERIENCE
              </p>
              <p>
                Razer is a name synonymous with high-quality gaming peripherals
                and accessories, and our mobile gaming accessories are no
                exception. These accessories are specifically designed to
                enhance the gaming experience on your mobile device, making it
                more immersive, comfortable, and enjoyable.
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Mobile;

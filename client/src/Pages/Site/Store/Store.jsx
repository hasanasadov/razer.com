import React, { useEffect, useState } from "react";
import "./Store.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineElectricBolt } from "react-icons/md";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { BsFillCalendarDayFill } from "react-icons/bs";
import Loader from "../../../Components/Loader/Loader";
import Slider from "react-slick";
import MetaData from "../../../Layout/Site/Header/MetaData";
import StoreCard from "./StoreCard";
import StoreNewCard from "./StoreNewCard";
import axios from "axios";

const newProduct ={
  name:"NEW RAZER BLADE 14",
  descCard: "NVIDIA® GeForce RTX™ 40 Series 14” Laptop with AMD Ryzen 9 7940HS Processor.",
  descBanner:"SMALL SIZE. BIG PERFORMANCE.",
  imgCard: "https://assets3.razerzone.com/HWyBrdi1Zay37XldxX3Y1O4puOg=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhb7%2Fh1b%2F9539342008350%2Fblade14-p9-black-500x500.png",
  imgBanner: "https://assets2.razerzone.com/images/pnx.assets/6ca16320b8425e0a74bc7ed71f2adf99/razer-blade-14-2023-homepage-desktop2x.jpg",
  price:2399.99,
  category:"pc",
  _id:"123",
}
const product ={
  name:"NEW RAZER BLADE 14",
  descCard: "NVIDIA® GeForce RTX™ 40 Series 14” Laptop with AMD Ryzen 9 7940HS Processor.",
  imgCard: "https://assets3.razerzone.com/HWyBrdi1Zay37XldxX3Y1O4puOg=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhb7%2Fh1b%2F9539342008350%2Fblade14-p9-black-500x500.png",
  price:2399.99,
  category:"pc",
  _id:"123",
}

const Store = () => {
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

 
 const [dataNew, setDataNew] = useState([]);

 useEffect(() => {
   axios.get("http://localhost:7777/api/v1/newProduct/").then((res) => {
     console.log(res.data.product )
     setDataNew(res.data.product);
   }).catch((error) => {
           console.error("Error fetching data:", error);
 });
}, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 10,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };
  var settingsNews = {
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    dots: true,
    arrows: false,
    infinite: true,
    cssEase: "linear",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section>
          <MetaData title="Store" />

          <div className="store">
            <div className="store__filter">
              <Slider className="store__filterCarousel" {...settings}>
                <div className="store__filterCarousel--box store__filterCarousel--box1">
                  <div className="store__filterCarousel--boxTop">
                    {" "}
                    <img
                      src="https://assets2.razerzone.com/images/pnx.assets/f41fa0e9b4d6cb094ecba2b6086d692a/razer-blade-16_200x150.png"
                      alt=""
                    />
                  </div>
                  <div className="store__filterCarousel--boxBottom">
                    <p>Laptops</p>
                  </div>
                </div>
                <div className="store__filterCarousel--box store__filterCarousel--box2">
                  <div className="store__filterCarousel--boxTop">
                    {" "}
                    <img
                      src="https://assets2.razerzone.com/images/pnx.assets/f41fa0e9b4d6cb094ecba2b6086d692a/razer-store-v2_components_icon_188x150.png"
                      alt=""
                    />
                  </div>
                  <div className="store__filterCarousel--boxBottom">
                    <p>Components</p>
                  </div>
                </div>
                <div className="store__filterCarousel--box store__filterCarousel--box3">
                  <div className="store__filterCarousel--boxTop">
                    {" "}
                    <img
                      src="https://assets2.razerzone.com/images/pnx.assets/d3c009aecfca0d406f63fe42575891e5/razer-basilisk-v3-pro_90x150.png"
                      alt=""
                    />
                  </div>
                  <div className="store__filterCarousel--boxBottom">
                    <p>Mice</p>
                  </div>
                </div>
                <div className="store__filterCarousel--box store__filterCarousel--box4">
                  <div className="store__filterCarousel--boxTop">
                    {" "}
                    <img
                      src="https://assets2.razerzone.com/images/pnx.assets/f41fa0e9b4d6cb094ecba2b6086d692a/razer-blackwidow-v4-pro_168x150.png"
                      alt=""
                    />
                  </div>
                  <div className="store__filterCarousel--boxBottom">
                    <p>Keyboards</p>
                  </div>
                </div>
                <div className="store__filterCarousel--box store__filterCarousel--box5">
                  <div className="store__filterCarousel--boxTop">
                    {" "}
                    <img
                      src="https://assets2.razerzone.com/images/pnx.assets/f41fa0e9b4d6cb094ecba2b6086d692a/razer-store-v2_audio_icon_168x150.png"
                      alt=""
                    />
                  </div>
                  <div className="store__filterCarousel--boxBottom">
                    <p>Audio</p>
                  </div>
                </div>
                <div className="store__filterCarousel--box store__filterCarousel--box6">
                  <div className="store__filterCarousel--boxTop">
                    {" "}
                    <img
                      src="https://assets2.razerzone.com/images/pnx.assets/d3c009aecfca0d406f63fe42575891e5/razer-kiyo-pro-ultra_118x150.png"
                      alt=""
                    />
                  </div>
                  <div className="store__filterCarousel--boxBottom">
                    <p>Content Creation</p>
                  </div>
                </div>
                <div className="store__filterCarousel--box store__filterCarousel--box7">
                  <div className="store__filterCarousel--boxTop">
                    {" "}
                    <img
                      src="https://assets2.razerzone.com/images/pnx.assets/d3c009aecfca0d406f63fe42575891e5/razer-enki-pro_lamborghini_80x150.png"
                      alt=""
                    />
                  </div>
                  <div className="store__filterCarousel--boxBottom">
                    <p>Chairs</p>
                  </div>
                </div>
                <div className="store__filterCarousel--box store__filterCarousel--box8">
                  <div className="store__filterCarousel--boxTop">
                    {" "}
                    <img
                      src="https://assets2.razerzone.com/images/pnx.assets/f41fa0e9b4d6cb094ecba2b6086d692a/razer-wolverine-v2-pro-white_144x150.png"
                      alt=""
                    />
                  </div>
                  <div className="store__filterCarousel--boxBottom">
                    <p>Console</p>
                  </div>
                </div>
                <div className="store__filterCarousel--box store__filterCarousel--box9">
                  <div className="store__filterCarousel--boxTop">
                    {" "}
                    <img
                      src="https://assets2.razerzone.com/images/pnx.assets/f41fa0e9b4d6cb094ecba2b6086d692a/razer-edge_186x150.png"
                      alt=""
                    />
                  </div>
                  <div className="store__filterCarousel--boxBottom">
                    <p>Mobile</p>
                  </div>
                </div>
                <div className="store__filterCarousel--box store__filterCarousel--box10">
                  <div className="store__filterCarousel--boxTop">
                    {" "}
                    <img
                      src="https://assets2.razerzone.com/images/pnx.assets/8a4cf27b0557ec77704bd4de1d471a17/rogue-15-chromatic_2x.png"
                      alt=""
                    />
                  </div>
                  <div className="store__filterCarousel--boxBottom">
                    <p>Gear</p>
                  </div>
                </div>
              </Slider>
            </div>
            <div className="store__freshHero">
              <div className="store__freshHero-top">
                <p>THE LATEST AND GREATEST GAMING GEAR </p>
                <p> Razer mice, keyboards, headsets, laptops & more</p>
              </div>
              <div className="store__freshHero-bottom">
                <p>FRESH OFF THE LINE</p>
                <p>
                  Check out our latest releases to secure the most up-to-date
                  upgrades for your setup
                </p>
              </div>
            </div>
            <div className="store__fresh">
            {dataNew.length > 0 && dataNew.map((item, index) => {
                {
                  return (
                    <div key={index} className="store__fresh__card">
                    <div className="store__fresh__card--top">
                    {
                          item.imgCard.map(img=>{
                            return(
                              <img src={img.url} alt="" />
                            )
                          })
                        }
                    </div>
                    <div className="store__fresh__card--bottom">
                      <div className="store__fresh__card-name">
                        <p>{item.name}</p>
                      </div>
                      <div className="store__fresh__card-desc">
                        <p>
                        {item.descCard}
                        </p>
                      </div>
                      <div className="store__fresh__card-priceAdd">
                        <div className="store__fresh__card-priceAdd-left">
                          <p>From</p>
                          <p>US${item.price}</p>
                        </div>
                        <div className="store__fresh__card-priceAdd-right">
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

            <div className="store__newsSlider">
              <Slider className="store__newsCarousel" {...settingsNews}>
                <div className="store__newsCarousel--box store__newsCarousel--box1">
                  <div className="store__newsCarousel--inner">
                    <p>UNLEASH A NEW AGE OF TECHNOLOGY</p>
                    <p>EXPERIENCE THE REVOLUTION</p>
                  </div>
                </div>
                <div className="store__newsCarousel--box store__newsCarousel--box2">
                  <div className="store__newsCarousel--inner">
                    <p>BRING YOUR A-GAME ANYWHERE</p>
                    <p>RAZERSTORE REWARDS GIVEAWAY</p>
                  </div>
                </div>
                <div className="store__newsCarousel--box store__newsCarousel--box3">
                  <div className="store__newsCarousel--inner">
                    <p>GEAR UP FOR GLORY</p>
                    <p>Esports Showdown Specials</p>
                  </div>
                </div>
              </Slider>
            </div>
            <div className="store__prodsHero">
              <p>THE LATEST AND GREATEST GAMING GEAR</p>
              <p>Razer mice, keyboard, headset, laptops & more</p>
            </div>
            <div className="store__prods">
            {data.length > 0 && data.map((item, index) => {
                {
                  return (
                    <div key={index} className="store__fresh__card">
                    <div className="store__fresh__card--top">
                    {
                          item.imgCard.map(img=>{
                            return(
                              <img src={img.url} alt="" />
                            )
                          })
                        }
                    </div>
                    <div className="store__fresh__card--bottom">
                      <div className="store__fresh__card-name">
                        <p>{item.name}</p>
                      </div>
                      <div className="store__fresh__card-desc">
                        <p>
                        {item.descCard}
                        </p>
                      </div>
                      <div className="store__fresh__card-priceAdd">
                        <div className="store__fresh__card-priceAdd-left">
                          <p>From</p>
                          <p>US${item.price}</p>
                        </div>
                        <div className="store__fresh__card-priceAdd-right">
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
            <div className="store__offerSlider">
              <Slider className="store__offerCarousel" {...settingsNews}>
                <div className="store__offerCarousel--box store__offerCarousel--box1">
                  <div className="store__offerCarousel--inner">
                    <p>RAZER SKINS</p>
                    <p>
                      Crafted with customized 3M™ cast vinyl for extreme
                      durability and fused with cutting-edge adhesive
                      technologies for an ultra-precise fit, our skins are
                      decked out in an array of striking designs to express your
                      personal style.
                    </p>
                  </div>
                </div>
                <div className="store__offerCarousel--box store__offerCarousel--box2">
                  <div className="store__offerCarousel--inner">
                    <p>RAZER VIPER MINI SIGNATURE EDITION</p>
                    <p>Best lightweight performance gaming mouse</p>
                  </div>
                </div>
                <div className="store__offerCarousel--box store__offerCarousel--box3">
                  <div className="store__offerCarousel--inner">
                    <p>RAZER CERTIFIED REFURBISHED PRODUCTS</p>
                    <p>
                      Reborn and battle-ready, our restored products are
                      indistinguishable from their brand-new counterparts and
                      come outfitted with special savings that are second to
                      none.
                    </p>
                  </div>
                </div>
              </Slider>
            </div>
            <div className="store__whyBuy">
              <div className="store__whyBuy--top">
                <p>WHY BUY FROM RAZER.COM</p>
              </div>
              <div className="store__whyBuy--bottom">
                <div className="store__whyBuy--item">
                  <div className="store__whyBuy--item-top">
                    <div className="store__whyBuy--icon">
                      <MdOutlineElectricBolt className="whyBuyIcons" />
                    </div>
                  </div>
                  <div className="store__whyBuy--item-bottom">
                    <p>Get Firts Dibs</p>
                    <p>
                      Razer.com is the only place where you can buy our most
                      anticipated Razer gear immediately upon release.
                    </p>
                  </div>
                </div>
                <div className="store__whyBuy--item">
                  <div className="store__whyBuy--item-top">
                    <div className="store__whyBuy--icon">
                      <BsBag className="whyBuyIcons" />
                    </div>
                  </div>
                  <div className="store__whyBuy--item-bottom">
                    <p>The Largest Array Of Razer Gear</p>
                    <p>
                      As Razer’s official online store, we hold a massive
                      collection of products that can’t be matched anywhere
                      else.
                    </p>
                  </div>
                </div>
                <div className="store__whyBuy--item">
                  <div className="store__whyBuy--item-top">
                    <div className="store__whyBuy--icon">
                      <AiOutlineStar className="whyBuyIcons" />
                    </div>
                  </div>
                  <div className="store__whyBuy--item-bottom">
                    <p>Exclusive Razer Gear And Swag</p>
                    <p>
                      Get access to limited edition Razer gear that’s only
                      available on Razer.com.
                    </p>
                  </div>
                </div>
                <div className="store__whyBuy--item">
                  <div className="store__whyBuy--item-top">
                    <div className="store__whyBuy--icon">
                      <BsFillCalendarDayFill className="whyBuyIcons" />
                    </div>
                  </div>
                  <div className="store__whyBuy--item-bottom">
                    <p>Play Now, Pay Later</p>
                    <p>
                      With our 0% installment plan, spend more time gaming with
                      your sweet new gear and less time fussing over payment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Store;

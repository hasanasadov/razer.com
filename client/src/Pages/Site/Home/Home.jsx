import React, { useEffect, useState } from "react";
import "./Home.scss";
import { FaChevronRight } from "react-icons/fa";
import Loader from "../../../Components/Loader/Loader";
import HomeNewProduct from "./HomeNewProduct";
import MetaData from "../../../Layout/Site/Header/MetaData";

const product ={
  name:"NEW RAZER BLADE 14",
  descCard: "NVIDIA® GeForce RTX™ 40 Series 14” Laptop with AMD Ryzen 9 7940HS Processor.",
  descBanner:"SMALL SIZE. BIG PERFORMANCE.",
  imgCard: "https://assets3.razerzone.com/HWyBrdi1Zay37XldxX3Y1O4puOg=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhb7%2Fh1b%2F9539342008350%2Fblade14-p9-black-500x500.png",
  imgBanner: "https://assets2.razerzone.com/images/pnx.assets/6ca16320b8425e0a74bc7ed71f2adf99/razer-blade-14-2023-homepage-desktop2x.jpg",
  price:2399.99,
  category:"pc",
  _id:"123",
}


const Home = () => {
const[loading,setLoading]=useState(false)
useEffect(()=>{

  setLoading(true)
  window.scrollTo({top:0})
  setTimeout(()=>{
    setLoading(false)
  },1500)

},[])


  return (
    <>
    
    {
      loading ?
      <Loader/>:
      <section>
        <MetaData title="Razer" />
        <div className="home">
      <div className="home__new">
        <HomeNewProduct product={product}/>
        <HomeNewProduct product={product}/>
        <HomeNewProduct product={product}/>
        <HomeNewProduct product={product}/>
      </div>
      <div className="home__grid">
        <div className="home__grid--item home__grid--item1">
          <p className="home__grid--item--p home__grid--item--p1">
            CHAMPION HOPE
          </p>
          <p className="home__grid--item--p home__grid--item--p2">
            IN SUPPORT OF BREAST CANCER AWARENESS
          </p>
        </div>
        <div className="home__grid--item home__grid--item2">
          <p className="home__grid--item--p home__grid--item--p1">
            RAZER KITSUNE
          </p>
          <p className="home__grid--item--p home__grid--item--p2">
            OPTICAL + PRECISION! THE ULTRA COMBO!
          </p>
        </div>
        <div className="home__grid--item home__grid--item3">
          <p className="home__grid--item--p home__grid--item--p1">
            NEW RAZER BLADE 15
          </p>
          <p className="home__grid--item--p home__grid--item--p2">
            PORTABLE. POWERFUL. PERFECTION.
          </p>
        </div>
        <div className="home__grid--item home__grid--item4">
          <p className="home__grid--item--p home__grid--item--p1">
            RAZER ENKI PRO
          </p>
          <p className="home__grid--item--p home__grid--item--p2">
            AUTOMOBILI LAMBORGHINI EDITION
          </p>
        </div>
        <div className="home__grid--item home__grid--item5">
          <p className="home__grid--item--p home__grid--item--p1">
            RAZER EDGE
          </p>
          <p className="home__grid--item--p home__grid--item--p2">
            THE ULTIMATE ANDROID GAMING HANDHELD
          </p>
        </div>
        <div className="home__grid--item home__grid--item6">
          <p className="home__grid--item--p home__grid--item--p1">
            BRING YOUR A‑GAME ANYWHERE
          </p>
          <p className="home__grid--item--p home__grid--item--p2">
            RAZERSTORE REWARDS GIVEAWAY
          </p>
        </div>
      </div>
    </div>  
    </section>  
    }
    
    </>
  );
};

export default Home;



// import React, { useEffect, useState } from "react";
// import "./Home.scss";
// import { FaChevronRight } from "react-icons/fa";
// import Loader from "../../../Components/Loader/Loader";
// import HomeNewProduct from "./HomeNewProduct";
// import MetaData from "../../../Layout/Site/Header/MetaData";
// import axios from "axios";

// const product ={
//   name:"NEW RAZER BLADE 14",
//   descCard: "NVIDIA® GeForce RTX™ 40 Series 14” Laptop with AMD Ryzen 9 7940HS Processor.",
//   descBanner:"SMALL SIZE. BIG PERFORMANCE.",
//   imgCard: "https://assets3.razerzone.com/HWyBrdi1Zay37XldxX3Y1O4puOg=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhb7%2Fh1b%2F9539342008350%2Fblade14-p9-black-500x500.png",
//   imgBanner: "https://assets2.razerzone.com/images/pnx.assets/6ca16320b8425e0a74bc7ed71f2adf99/razer-blade-14-2023-homepage-desktop2x.jpg",
//   price:2399.99,
//   category:"pc",
//   _id:"123",
// }



// const Home = () => {
//   const [data, setData] = useState([]);

// useEffect(() => {
//   axios.get("http://localhost:7777/api/v1/newProduct/").then((res) => {
//     console.log(res.data.product )
//     setData(res.data.product);
//   }).catch((error) => {
//           console.error("Error fetching data:", error);
// });
// }, []);
// const[loading,setLoading]=useState(false)
// useEffect(()=>{

//   setLoading(true)
//   window.scrollTo({top:0})
//   setTimeout(()=>{
//     setLoading(false)
//   },1500)

// },[])


//   return (
//     <>
    
//     {
//       loading ?
//       <Loader/>:
//       <section>
//         <MetaData title="Razer" />
//         <div className="home">
//       <div className="home__new">
//       {data.map((item, index) => {
//                 {
//                   return (
//                     <div key={index} className="home__new__banner" style={{ backgroundImage: `url(${item.url})` }}>
//                     <p className="home__new__banner--p home__new__banner--p1">
//                       {item.name}
//                       {item.url}
//                     </p>
//                     <p className="home__new__banner--p home__new__banner--p2">
//                       {item.descBanner}
//                     </p>
//                   </div> 
//                   )
//                 }
//                 ;
//               })}
//         {/* <div className="home__new__banner" style={{ backgroundImage: `url(${product.imgBanner})` }}>
//           <p className="home__new__banner--p home__new__banner--p1">
//             {product.name}
//           </p>
//           <p className="home__new__banner--p home__new__banner--p2">
//             {product.descBanner}
//           </p>
//         </div> */}
//       </div>
//       <div className="home__grid">
//         <div className="home__grid--item home__grid--item1">
//           <p className="home__grid--item--p home__grid--item--p1">
//             CHAMPION HOPE
//           </p>
//           <p className="home__grid--item--p home__grid--item--p2">
//             IN SUPPORT OF BREAST CANCER AWARENESS
//           </p>
//         </div>
//         <div className="home__grid--item home__grid--item2">
//           <p className="home__grid--item--p home__grid--item--p1">
//             RAZER KITSUNE
//           </p>
//           <p className="home__grid--item--p home__grid--item--p2">
//             OPTICAL + PRECISION! THE ULTRA COMBO!
//           </p>
//         </div>
//         <div className="home__grid--item home__grid--item3">
//           <p className="home__grid--item--p home__grid--item--p1">
//             NEW RAZER BLADE 15
//           </p>
//           <p className="home__grid--item--p home__grid--item--p2">
//             PORTABLE. POWERFUL. PERFECTION.
//           </p>
//         </div>
//         <div className="home__grid--item home__grid--item4">
//           <p className="home__grid--item--p home__grid--item--p1">
//             RAZER ENKI PRO
//           </p>
//           <p className="home__grid--item--p home__grid--item--p2">
//             AUTOMOBILI LAMBORGHINI EDITION
//           </p>
//         </div>
//         <div className="home__grid--item home__grid--item5">
//           <p className="home__grid--item--p home__grid--item--p1">
//             RAZER EDGE
//           </p>
//           <p className="home__grid--item--p home__grid--item--p2">
//             THE ULTIMATE ANDROID GAMING HANDHELD
//           </p>
//         </div>
//         <div className="home__grid--item home__grid--item6">
//           <p className="home__grid--item--p home__grid--item--p1">
//             BRING YOUR A‑GAME ANYWHERE
//           </p>
//           <p className="home__grid--item--p home__grid--item--p2">
//             RAZERSTORE REWARDS GIVEAWAY
//           </p>
//         </div>
//       </div>
//     </div>  
//     </section>  
//     }
    
//     </>
//   );
// };

// export default Home;


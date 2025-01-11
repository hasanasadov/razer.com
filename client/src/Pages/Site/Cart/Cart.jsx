import React, { useEffect, useState } from "react";
import "./Cart.scss";
import Loader from "../../../Components/Loader/Loader";
import MetaData from "../../../Layout/Site/Header/MetaData";

const Cart = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    window.scrollTo({ top: 0 });
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section>
          <MetaData title="Home" />

          <div className="cart"></div>
        </section>
      )}
    </>
  );
};
export default Cart;

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import cartSlice from "../slices/cartSlice.js";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

// const store = configureStore({
//     reducer:{
//         cart: cartReducer
//     }
// })
// import { Provider } from "react-redux";
// import store from "../store.js";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

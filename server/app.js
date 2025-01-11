const express = require("express");
const app = express();
app.use(express.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
  });

const errorMiddleware = require("./middleware/error")

//Route Imports
const product = require("./routes/productRoute")
app.use("/api/v1", product)

//Route Imports
const newProduct = require("./routes/newProductRoute")
app.use("/api/v1", newProduct)

//Middleware for errors
app.use(errorMiddleware)

module.exports = app
const express = require("express");
const {
  getAllProducts,
  createAllProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
} = require("../controllers/productController");

const router = express.Router();

router.route("/product").get(getAllProducts);
router.route("/products/new").post(createAllProduct);
router
  .route("/product/:id")
  .put(updateProduct)
  .delete(deleteProduct)
  .get(getProductDetails);

module.exports = router;

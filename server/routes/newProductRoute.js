const express = require("express");
const {
  getAllNewProducts,
  createNewProduct,
  updateNewProduct,
  deleteNewProduct,
  getNewProductDetails,
} = require("../controllers/newProductController");

const router = express.Router();

router.route("/newProduct").get(getAllNewProducts);
router.route("/newProducts/new").post(createNewProduct);
router
  .route("/newProduct/:id")
  .put(updateNewProduct)
  .delete(deleteNewProduct)
  .get(getNewProductDetails);

module.exports = router;

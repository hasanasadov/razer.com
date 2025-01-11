const AllProducts = require("../models/allProductModel");
const ErrorHander = require("../util/errorHander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../util/apifeatures");

//Create a product
exports.createAllProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await AllProducts.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
});

//Get product details

exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {
  const product = await AllProducts.findById(req.params.id);

  if (!product) {
    return next(new ErrorHander("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    product,
    productCount
  });
});

// Get all products
exports.getAllProducts = catchAsyncErrors(async (req, res) => {
  const resultPerPage = 30;

  const productCount = await AllProducts.countDocuments();

  const apiFeature = new ApiFeatures(AllProducts.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
  const product = await apiFeature.query;
  res.status(200).json({
    success: true,
    product,
  });
});

//Update product
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await AllProducts.findById(req.params.id);

  if (!product) {
    return next(new ErrorHander("Product not found", 404));
  }

  product = await AllProducts.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    product,
  });
});

//Delete Product

exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await AllProducts.findById(req.params.id);

  if (!product) {
    return next(new ErrorHander("Product not found", 404));
  }

  await product.deleteOne();

  res.status(200).json({
    success: true,
    message: "Product Deleted Successfully",
  });
});

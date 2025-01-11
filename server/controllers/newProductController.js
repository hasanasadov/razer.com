const NewProducts = require("../models/newProductModel");
const ErrorHander = require("../util/errorHander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../util/apifeatures")
//Create a NewProduct
exports.createNewProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await NewProducts.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
});

//Get NewProduct details

exports.getNewProductDetails = catchAsyncErrors(async (req, res, next) => {
  const product = await NewProducts.findById(req.params.id);

  if (!product) {
    return next(new ErrorHander("NewProduct not found", 404));
  }

  res.status(200).json({
    success: true,
    product,
    productCount,
  });
});

// Get all NewProducts
exports.getAllNewProducts = catchAsyncErrors(async (req, res) => {
  const resultPerPage = 30;
  
  const productCount = await NewProducts.countDocuments();

  const apiFeature = new ApiFeatures(NewProducts.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
  const product = await apiFeature.query;
  res.status(200).json({
    success: true,
    product,
  });
});

//Update NewProduct
exports.updateNewProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await NewProducts.findById(req.params.id);

  if (!product) {
    return next(new ErrorHander("NewProduct not found", 404));
  }

  product = await NewProducts.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    product,
  });
});

//Delete NewProduct

exports.deleteNewProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await NewProducts.findById(req.params.id);

  if (!product) {
    return next(new ErrorHander("NewProduct not found", 404));
  }

  await product.deleteOne();

  res.status(200).json({
    success: true,
    message: "NewProduct Deleted Successfully",
  });
});

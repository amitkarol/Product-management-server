import express from "express";
const router = express.Router();
import productController from "../Controllers/productController.js";

const {
  createProduct,
  getAllProducts,
  getProductByNumber,
  updateProduct,
  deleteProduct,
} = productController;

router.route("/products")
    .post(createProduct)
    .get(getAllProducts)

router.route("/products/:productNumber")
    .get(getProductByNumber)
    .patch(updateProduct)
    .delete(deleteProduct)

export default router;
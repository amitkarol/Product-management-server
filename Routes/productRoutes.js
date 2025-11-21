const express = require('express');
const router = express.Router();
import {
    createProduct,
    getAllProducts,
    getProductByNumber,
    updateProduct,
    deleteProduct
} from "../controllers/productController.js";


router.route("/products")
    .post(createProduct)
    .get(getAllProducts)

router.route("/products/:productNumber")
    .get(getProductByNumber)
    .patch(updateProduct)
    .delete(deleteProduct)

export default router;
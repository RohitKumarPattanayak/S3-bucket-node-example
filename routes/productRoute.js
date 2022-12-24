import Express from "express";
import {
  addProduct,
  getProducts,
  getProductsById,
  updateProductById,
  deleteProductById,
  getProductsReviews,
} from "../controller/productController.js";
const router = Express.Router();

// add products
router.post("/product", addProduct);

// get products
router.get("/getProducts", getProducts);

// get single product
router.get("/getProducts/:id", getProductsById);

//update product details by id
router.put("/updateProducts/:id", updateProductById);

//delete product details by id
router.delete("/deleteProducts/:id", deleteProductById);

//get all the productc details along with the reviews associated with it
router.get("/pr/:id", getProductsReviews);
export default router;

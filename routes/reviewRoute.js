import Express from "express";
import {
  addReview,
  getAllReview,
  getReviewsById,
  deleteReviewsById,
  updateReviewById,
} from "../controller/reviewController.js";
const router = Express.Router();

// add products
router.post("/Review", addReview);

// get products
router.get("/getReviews", getAllReview);

// get single product
router.get("/getReviews/:id", getReviewsById);

//update product details by id
router.put("/updateReviews/:id", updateReviewById);

//delete product details by id
router.delete("/deleteReviews/:id", deleteReviewsById);

export default router;

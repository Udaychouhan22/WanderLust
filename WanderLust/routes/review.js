const express=require("express");
const router=express.Router({mergeParams: true});
const Listing= require("../models/listing.js");
const wrapAsync=require("../utils/wrapAsync.js");

const { validateReview, isLoggedIN, isReviewAuthor } = require("../middleware.js");
const reviewController =require("../controllers/reviews.js");

//Review 
//post Review  route
router.post("/", isLoggedIN, validateReview,wrapAsync(reviewController.createReview));

//delete Review route
router.delete("/:reviewId", isLoggedIN,isReviewAuthor, wrapAsync(reviewController.destroyReview));

module.exports=router;
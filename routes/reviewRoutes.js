const express = require("express");
const router = express.Router();
const Product = require("../models/products");
const Review = require("../models/review");


router.post("/:id/reviews", async (req, res) => {
    const {id} = req.params;
    const r = req.body;
    const newRev = await new Review(r);
    const p = await Product.findById(id);
    p.reviews.push(newRev._id);
    newRev.product = id;
    await newRev.save();
    await p.save();

    res.redirect('back');
   
})




module.exports = router;
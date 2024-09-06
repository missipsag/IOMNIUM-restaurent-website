const express = require("express");
const Product = require("../models/products")
const router = express.routre()

router.get('/products', async (req, res ) => {
    const allProducts= await Product.find({});
    res.send("/", {allProducts});
})










module.exports=router

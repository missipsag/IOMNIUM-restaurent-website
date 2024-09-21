const express = require("express");
const Product = require("../models/products");
const router = express.Router();
const mongoose = require("mongoose");
const Review = require("../models/review");



router.get('/', async (req, res ) => {
    const pizzas = await Product.find({category : 'pizza'});
    const sandwiches = await Product.find({category : 'sandwich'});
    const desserts = await Product.find({category : 'dessert'});
    const drinks = await Product.find({category : 'drink'});
    
    res.render("products/index.ejs", {pizzas , sandwiches, desserts, drinks});
})


router.get("/:id", async (req, res ) => {
    const {id} = req.params;
    const p = await Product.findById(id);
    const reviews = await Review.find({product : p._id});
    
    res.render("products/show.ejs", {p, reviews});
})







module.exports=router

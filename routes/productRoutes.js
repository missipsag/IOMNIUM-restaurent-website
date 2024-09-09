const express = require("express");
const Product = require("../models/products");
const router = express.Router();
const mongoose = require("mongoose");



router.get('/', async (req, res ) => {
    const pizzas = await Product.find({category : 'pizza'});
    const sandwiches = await Product.find({category : 'sandwich'});
    const desserts = await Product.find({category : 'dessert'});
    const drinks = await Product.find({category : 'drink'});
    

    res.render("products/index.ejs", {pizzas , sandwiches, desserts, drinks});
})










module.exports=router

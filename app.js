const express = require("express");
const PORT = 3000;
const ejsMate = require("ejs-mate");
const path = require("path");
const productRoutes = require("./routes/productRoutes");
const mongoose = require("mongoose");

const app = express();

//connnect to our database
mongoose.connect("mongodb://localhost:27017/IOMNIUM");
const db = mongoose.connection;
db.on("error", console.error.bind(console, 'connection error : '));
db.once("open", ()=>{
    console.log("DATABASE CONNECTED");
})

//set up the view engine
app.engine("ejs", ejsMate);
app.set("views", path.join(__dirname, 'views'));
app.set("view engine", "ejs");


//set up our routes
app.use("/IOMNIUM", productRoutes);

//set up the static file directory 
app.use(express.static(path.join(__dirname, 'public')));



app.listen(PORT, ()=>{
    console.log(`SERVER RUNNING ON PORT ${PORT} `);
})
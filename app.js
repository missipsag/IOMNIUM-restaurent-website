const express = require("express");
const PORT = 3000;
const ejsMate = require("ejs-mate");
const path = require("path")
const productRoutes = require("./routes/productRoutes")

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
app.set("views", path.join(__dirname, views));
app.set("view engine", "ejs");


//set up our routes
app.use("/products", productRoutes);

app.get("/", (req, res) => {
    res.send("WELCOME TO IOMNIUM RESTAURENT WEBSITE");
})

app.listen(PORT, ()=>{
    console.log(`SERVER RUNNING ON PORT ${PORT} `)
})
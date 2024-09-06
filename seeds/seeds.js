const Product = require("../models/products");
const mongoose = require("mongoose");
const seedHelpers = require("./seedHelpers.js")

//connnect to our database
mongoose.connect("mongodb://localhost:27017/IOMNIUM");
const db = mongoose.connection;
db.on("error", console.error.bind(console, 'connection error : '));
db.once("open", ()=>{
    console.log("DATABASE CONNECTED");
})


//populating database
const seedDB = async () => {
    for(let i = 0 ; i < seedHelpers.length; i++){
        const image = `https://picsum.photos/400?random=${Math.floor(Math.random()*9)+1}`
        const p = new Product({
            name : seedHelpers[i].name,
            price :seedHelpers[i].price,
            rating : seedHelpers[i].rating,
            category : seedHelpers[i].category,
            ingredients : seedHelpers[i].ingredients,
            image : `https://picsum.photos/400?random=${Math.floor(Math.random()+1)}`


        })
        await p.save();
    }
} 

//closing connection
seedDB().then(()=> {
    db.close();
});

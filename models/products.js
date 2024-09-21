const  mongoose = require("mongoose")
const Schema = mongoose.Schema;

const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true,
        min : 0
        
    },
    image : {
        type : String, 
        required : true
    },
    rating : {
        type: Number

    },
    ingredients : {
        type : [String]
    },
    category : {
        type : String,
        enum : ['pizza' , 'sandwich', 'drink' , 'dessert']
    },
    reviews :[ {
        type : Schema.Types.ObjectId,
        ref : 'Review'
    }]
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
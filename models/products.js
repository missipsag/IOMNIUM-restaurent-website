const  mongoose = require("mongoose")


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
    }
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
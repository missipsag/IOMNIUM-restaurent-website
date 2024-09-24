const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const reviewSchema = new Schema({
    username : {
        type : String,
        required : true
    },
    comment : {
        type : String ,
        required : true
    } ,
    // rating : {
    //     type : Number,
    //     required : true
    // }, 
    product: {
        type : Schema.Types.ObjectId,
        ref : "Product"
    }
})



module.exports = mongoose.model('Review', reviewSchema);
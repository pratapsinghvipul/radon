const mongoose = require('mongoose')

const BooksCollection = new mongoose.Schema({
    bookName: {type:String,required:true},
    year : {default:2021,type:Number},
    price: {
        indianPrice:Number,
        europePrice:Number
    },
    tags :[String],
    authorName: String,
    totalPages: Number,
    stockAvailable: Boolean
},{timestamps:true})

module.exports = mongoose.model('Book-Collection',BooksCollection)
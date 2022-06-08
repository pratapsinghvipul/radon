const mongoose = require('mongoose')

const userBookschema = new mongoose.Schema({
    bookName: {type:String,unique:true},
    authorName: String,
    category : String,
    year : Number
},{timestamps:true})

module.exports = mongoose.model('Book-User',userBookschema)
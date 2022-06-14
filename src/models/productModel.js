const mongoose = require('mongoose');
const productSchema = new mongoose.Schema( {
    // Write the schema content
    name: String, 
    category:String,
    price:Number,
}, { timestamps: true });

module.exports = mongoose.model('product', productSchema) //product


/*{
	_id: ObjectId("61951bfa4d9fe0d34da86344"),
	name:"Catcher in the Rye",
	category:"book",
	price:70 //mandatory property
} */
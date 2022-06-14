const mongoose = require('mongoose');
const ObjectId=mongoose.Schema.Types.ObjectId
const orderSchema = new mongoose.Schema( {
    // Write the schema content
    userId: {
        type:ObjectId,ref:"Users"
    },
    productId: {
        type:ObjectId,ref:"product"
    },
    amount:Number,
    isfreeAppUser:{
        type:Boolean,default:false
    },
    

}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema) //order

/*{
	_id: ObjectId("61951bfa4d9fe0d34da86344"),
	userId: “61951bfa4d9fe0d34da86829”,
	productId: “61951bfa4d9fe0d34da86344”
	amount: 0,
	isfreeAppUser: true, 
	date: “22/11/2021”
} */
const OrderModel = require("../models/orderModel")
const userModel = require("../models/userModel")
const productModel = require("../models/productModel")
const createOrder = async function (req, res) {
    let data = req.body;
    let uId = await userModel.findById(req.body.userId)
    let pId = await productModel.findById(req.body.productId)
    let saveData
    if (!data.userId)
        res.send({ msg: "User ID is required" })
    else if (!uId)
        res.send({ msg: "Enter valid User ID" })
    else if (!data.productId)
        res.send({ msg: "Product ID is required" })
    else if (!pId)
        res.send({ msg: "Enter valid Product ID" })
    else {
        saveData = await OrderModel.create(data);
        if (req.headers["isfreeappuser"] === "true") {
            await OrderModel.updateOne({ userId: data.userId }, { $set: { amount: 0 } },{new:true})
        }
        else {
            let pPrice = pId.price;
            if (uId.balance > pPrice){
                await userModel.updateOne({ _id: data.userId }, { $inc: { balance: -pPrice } },{new:true})
                await OrderModel.updateOne({ _id:saveData._id }, { $set: { amount: pPrice } },{new:true})
                res.send({ msg: saveData });
            }
            else res.send({msg:"user doesn't have enough balance"})
        }
         
    } 
}

module.exports.createOrder = createOrder
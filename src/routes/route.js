const express = require('express');
const router = express.Router();

const userController= require("../controllers/userController")
const productController = require("../controllers/productController")
const orderController = require("../controllers/orderController")
const cmMWare = require("../middlewares/commonMiddlewares")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/createProduct",productController.createProduct)
router.post("/createUser",cmMWare.mid1,userController.createUser)
router.post("/createOrder",cmMWare.mid1,orderController.createOrder)


module.exports = router;
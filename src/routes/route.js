const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middleware = require("../middleware/middleware")

router.post("/createUser", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", userController.getUserData)

router.put("/userUpdate/:userId", middleware.getUserData, userController.updateUser)

router.delete("/deleteData/:userId", middleware.getUserData, userController.deleteUser)

module.exports = router;
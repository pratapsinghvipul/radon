const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middleware = require("../middleware/auth")

router.post("/createUser", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", userController.getUserData)

router.put("/userUpdate/:userId", middleware.authenticate, middleware.authorise, userController.updateUser)

router.delete("/deleteData/:userId", middleware.authenticate, middleware.authorise, userController.deleteUser)

module.exports = router;
const express = require('express');

const router = express.Router();
const userController = require("../controller/userController")

router.post('/createUserbook', userController.createBook)

router.get('/getUserbook', userController.allBook)



module.exports = router;
// adding this comment for no reason

const express = require('express');
const router = express.Router();
const Controller = require("../controller/Controller")

router.post('/createBook', Controller.createBook)

router.post('/createAuthor',Controller.createAuthor)

router.get('/listChetanBhagatBooks', Controller.listChetanBhagatBooks)

router.get('/findAuthorOfTwoStates', Controller.findAuthorOfTwoStates)

router.get('/findAuthorByBooksCosts50to100', Controller.findAuthorByBooksCosts50to100)

module.exports = router;
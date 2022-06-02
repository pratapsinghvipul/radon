const express = require('express');
const externalModule = require('../logger/logger')
const validator=require('../validator/formatter')
const util=require('../util/helper')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('The constant in logger route has a value '+externalModule.endpoint)
    console.log('The current batch is '+externalModule.batch)
    externalModule.Welcome()
    res.send('My first ever api!')
});

router.get('/test-me1', function (req, res) {
  util.printTodaysDate()
  util.printCurrentMonth()
  util.printBatchInformation ()
    res.send('My second ever api!')
});

router.get('/test-me2', function (req, res) {
    validator.changeCaseToLower()
    validator.changeCaseToUpper(
        validator.trimString()
    )
    res.send('My third api!')

});

router.get('/test-me3', function (req, res) {
    res.send('My 4th api!')
});

router.get('/test-me4', function (req, res) {
    res.send('My last api!')
});

module.exports = router;
// adding this comment for no reason
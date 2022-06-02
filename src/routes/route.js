const lodash = require('lodash');
const express = require('express');
const externalModule = require('../logger/logger')
const validator=require('../validator/formatter')
const util=require('../util/helper')
const router = express.Router();

router.get('/test-me', function (req, res) {
    
    externalModule.Welcome()
    util.printTodaysDate()
  util.printCurrentMonth()
  util.printBatchInformation ()
  validator.changeCaseToLower()
  validator.changeCaseToUpper()
      validator.trimString()
    res.send('My first ever api!')
});
router.get('/hello', function (req, res){
  const month=["january","february","march","april","may","june","july","august","september","october","november","december"]
  console.log(lodash.chunk(month,3))
  const oddNumbers=[1,3,5,7,9,11,13,15,17,19]
  console.log(lodash.tail(oddNumbers))
  const Numbers=[1,1,2,5,5]
  console.log(lodash.union(Numbers))
  const Movies=[["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
  console.log(lodash.fromPairs(Movies))
})

module.exports= router;
// adding this comment for no reason
const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const weatherController = require("../controllers/weatherController")
const memesController = require("../controllers/memesController")

router.get("/getDataByDistrictAndDate", CowinController.getByIdAndDate)

router.get("/WeatherTemperatureOfLondon", weatherController.weatherTemperatureOfLondon)

router.get("/weatherTemperatureOfCitys", weatherController.weatherTemperatureOfCitys)

router.get("/memesData", memesController.memesData)

router.post("/createMeme", memesController.createMeme)
module.exports = router;
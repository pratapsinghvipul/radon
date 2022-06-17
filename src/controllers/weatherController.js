let axios = require("axios")

const weatherTemperatureOfLondon = async function (req, res) {
    try {
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=London&appid=67216806952267c54d8bc95e4246743d`
        }
        let result = await axios(options)
        let data = result.data.main.temp
        res.status(200).send({ temp: data })
    }
    catch (error) {
        res.status(500).send({ msg: error.message })
    }
}

const weatherTemperatureOfCitys = async function (req, res) {
    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let citiesTemperature = []
        for (let i = 0; i < cities.length; i++) {
            let city = {city: cities[i]}
            let options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=67216806952267c54d8bc95e4246743d`
            }
            let result = await axios(options)
            city.temp = result.data.main.temp
            citiesTemperature.push(city)
        }
        let sortedData = citiesTemperature.sort(function (a,b){return a.temp - b.temp })
        res.status(200).send(sortedData)
    }
    catch (error) {
        res.status(500).send({ msg: error.message })
    }
}

module.exports.weatherTemperatureOfLondon = weatherTemperatureOfLondon
module.exports.weatherTemperatureOfCitys = weatherTemperatureOfCitys
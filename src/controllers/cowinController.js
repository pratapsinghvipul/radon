let axios = require("axios")

let getByIdAndDate = async function (req, res) {
    try {
        let districtId = req.query.district_id
        let date = req.query.date
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${districtId}&date=${date}`
        }
        let result = await axios(options);
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (error) {
        res.status(500).send({ msg: err.message })
    }
}

module.exports.getByIdAndDate = getByIdAndDate
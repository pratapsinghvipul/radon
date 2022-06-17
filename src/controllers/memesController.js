let axios = require("axios")

const memesData = async function (req, res) {
    try {
        let options = {
            method: "get",
            url: "https://api.imgflip.com/get_memes"
        }
        let result = await axios(options)
        let data = result.data
        res.status(200).send(data)
    }
    catch (error) {
        res.status(500).send({ msg: error.message })
    }
}

const createMeme = async function (req, res) {
    try {
        const {template_id,text0,text1} = req.query
        const options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=chewie12345&password=meme@123`,
        }
        const result = await axios(options)
        const data = result.data
        res.status(200).send(data)
    }
    catch (error) {
        res.status(500).send({ msg: error.message })
    }
}

module.exports.memesData = memesData
module.exports.createMeme = createMeme
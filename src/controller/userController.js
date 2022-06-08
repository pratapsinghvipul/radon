const userModel = require('../model/userModel')

const createBook = async function(req, res){
    let data = req.body
    let saveBook = await userModel.create(data)
    res.send({msg: saveBook})
}

const allBook = async function(req, res){
    let allBook = await userModel.find()
    res.send({msg: allBook})
}

module.exports.createBook = createBook
module.exports.allBook = allBook
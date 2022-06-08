const { find } = require('../model/bookModel')
const bookModel = require('../model/bookModel')

const createBook = async function(req, res){
    let data = req.body
    let saveBook = await bookModel.create(data)
    res.send({msg: saveBook})
}

const bookList = async function(req, res){
    let allBook = await bookModel.find().select({bookName:1,authorName:1,_id:0})
    res.send({msg: allBook})
}

const getBooksInYear = async function(req, res){
    let getYear = req.params.Year
    let bookList =await bookModel.find({year:getYear})
    res.send({msg: bookList})
}

const getParticularBooks  = async function(req, res){
    let ParticularBooks = await bookModel.find(req.body)
    res.send({msg: ParticularBooks})
}


const getXINRBooks  = async function(req, res){
    let INRBooks = await bookModel.find({'price.indianPrice':{$in:[100,200,500]}})
    res.send({msg: INRBooks})
}


const getRandomBooks = async function(req, res){
    let RandomBooks = await bookModel.find({$or:[{stockAvailable:true},{totalPages:{$gt:500}}]})
    res.send({msg: RandomBooks})
}
module.exports.createBook = createBook
module.exports.bookList = bookList
module.exports.getBooksInYear = getBooksInYear
module.exports.getParticularBooks = getParticularBooks
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBooks = getRandomBooks
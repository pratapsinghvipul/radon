const booksModel = require('../model/booksModel')
const authorsModel = require('../model/authorsModel')

const createBook = async function(req, res){
    let data = req.body
    if (data.author_id){
        let saveBook = await booksModel.create(data)
        res.send({msg: saveBook})
    }
    else{
        res.send({msg: "author_id is not given"})
    }
}

const createAuthor = async function(req, res){
    let data = req.body
    if(data.author_id){
        let saveBook = await authorsModel.create(data)
        res.send({msg: saveBook})
    }
    else{
        res.send({msg: "author_id is not given"})
    }
}

const listChetanBhagatBooks = async function(req, res){
    let authorData = await authorsModel.find({
        author_name:"Chetan Bhagat"
    }).select("author_id")
    
    let listBook = await booksModel.find({
        author_id:authorData[0].author_id
    })
    res.send({msg: listBook})
}

const findAuthorOfTwoStates = async function(req, res){
    let updateData = await booksModel.findOneAndUpdate({
        author_name:"Two states"
    },
    {
        $set:{
            price:100
        }
    },
    {
        new:true
    })
    
    let authorData = await authorsModel.find({
        author_id:updateData.author_id
    }).select({author_name:1,_id:0})
    
    let price = updateData.price
    res.send({msg: authorData,price})
}

const findAuthorByBooksCosts50to100 = async function(req, res){
    let booksAuthorId = await booksModel.find({
        price:{
            $gte:50, 
            $lt:100
        }
    }).select({author_id:1,_id:0})
    let authorId = booksAuthorId.map(a => a.author_id)
    let authorName = []
    for(let i=0;i<authorId.length;i++){
        let author = await authorsModel.find({
            author_id:authorId[i]
        }).select({
            author_name:1,
            _id:0
        })
        authorName.push(author)
    }
    res.send({msg: authorName})
}


module.exports.createBook = createBook
module.exports.createAuthor = createAuthor
module.exports.listChetanBhagatBooks = listChetanBhagatBooks
module.exports.findAuthorOfTwoStates = findAuthorOfTwoStates
module.exports.findAuthorByBooksCosts50to100 = findAuthorByBooksCosts50to100
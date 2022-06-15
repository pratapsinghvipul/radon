const jwt = require("jsonwebtoken")
const userModel = require("../models/userModel")

//To Authenticate the user
let authenticate = async function(req, res, next){
    let token = req.headers["x-auth-token"]
    if(!token){
        res.send({status: false, msg: "token must be present"})
    }
    else{
      let decodedToken = jwt.verify(token, "functionUp-radon")
      if (!decodedToken){
        res.send({ status: false, msg: "token is invalid" })
      }
      else{
        let userId = req.params.userId
        let userDetails = await userModel.findById(userId)
        if(!userDetails){
        res.send({ status: false, msg: "No such user exists" })
        }
        else{
          next()
        }
      }
    }
}

//to authorise the user
let authorise = async function(req, res, next){
    let userId = req.params.userId
    let token = req.headers["x-auth-token"]
    let decodedToken = jwt.verify(token, "functionUp-radon")
    if(userId===decodedToken.userId){
        next()
    }
    else{
        res.send("User not valid")
    }
}

module.exports.authenticate = authenticate
module.exports.authorise = authorise
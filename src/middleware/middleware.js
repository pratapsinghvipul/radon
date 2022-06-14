const jwt = require("jsonwebtoken")
const userModel = require("../models/userModel")

let getUserData = async function(req, res, next){
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
        let userId = req.params.userId;
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

module.exports.getUserData = getUserData
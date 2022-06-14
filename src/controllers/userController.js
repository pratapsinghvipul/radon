const jwt = require("jsonwebtoken")
const userModel = require("../models/userModel.js")

//creating user data
const createUser = async function (req, res){
  let data = req.body
  let savedData = await userModel.create(data)
  res.send({msg: savedData})
}

//login and making token and verifying
const loginUser = async function(req, res){
  let userName = req.body.emailId
  let password = req.body.password

  let user = await userModel.findOne({emailId:userName,password:password})
  if(!user){
    res.send({status:false, msg:"username or the password is not corerct"})
  }
  else{
    let token = jwt.sign({userId:user._id.toString(),
                          batch: "radon",
                          organisation:"FunctionUp"
    },"functionUp-radon")
    res.setHeader("x-auth-token", token);
    res.send({ status: true, token: token })
  }
}

//see user data
let getUserData = async function(req, res){
  let token = req.headers["x-auth-token"]
  if(!token){
      res.send({status: false, msg: "token must be present"})
  }
  else{
    console.log(token)
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
        res.send({ status: true, data: userDetails })
      } 
    }
  }
}

//update user detail
const updateUser = async function(req, res){
  let userData = req.body
  let userId = req.params.userId
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData,{new:true})
  res.send({ status: true, data: updatedUser })

}

//delete user or isDeleted to true
const deleteUser = async function(req, res){
  let userId = req.params.userId
  let userDetails = await userModel.findById(userId)
  if(userDetails.isDeleted == true){
    res.send("Data is already deleted")
  }
  else{
    await userModel.findByIdAndUpdate({_id:userId},{isDeleted:true},{new:true})
    res.send("user deleted")
  }
}

module.exports.createUser = createUser
module.exports.loginUser = loginUser
module.exports.getUserData = getUserData
module.exports.updateUser = updateUser
module.exports.deleteUser = deleteUser

const jwt = require("jsonwebtoken");
const blogModel = require("../models/blogModel")
let decodedToken;
const authenticate = function (req, res, next) {

  let token = req.headers["x-api-key"];
  if (!token) token = req.headers["x-api-key"];
  if (!token) return res.send({ status: false, msg: "token must be present" });

  decodedToken = jwt.verify(token, "msTeamRoom-10");
  console.log(decodedToken.authorId)
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });

  next()
}

const authorise = async function (req, res, next) {
  try {
    let author_Id = decodedToken.authorId;
    let blogId = req.params.blogId;
    let author = await blogModel.findOne({
      authorId: author_Id,
      _id: blogId
    })
    console.log(author)
    if (author == null) return res.status(403).send({
      status: false,
      msg: "You are not authorised to do the changes"
    })
    next()
  } catch (error) {
    res.status(500).send({ msg: error.message })

  }
}

module.exports.authenticate = authenticate;
module.exports.authorise = authorise;
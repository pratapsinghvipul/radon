

const mid1 = function(req,res,next){
    let header=req.headers["isfreeappuser"]
    if(!header){
    res.send({msg:"The madatory header not present"})
    }
    next();
}

const mid4= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid4")
    //counter
    next()
}

module.exports.mid1= mid1
//module.exports.mid2= mid2
//module.exports.mid3= mid3
//module.exports.mid4= mid4

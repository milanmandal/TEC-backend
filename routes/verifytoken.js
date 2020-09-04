const jwt = require('jsonwebtoken');
//const check = require('./auth');
const User = require('../model/user')


async function auth(req,res,next)
{
  
    console.log(req.body)
    check = req.headers.Authorization
    
    if(!check){
    return (
        res.status(401).send("token not found")),
        console.log("Acess denied")
    }

    try {
        const verified = jwt.verify(check,process.env.SECRET);
        const user = await User.findOne({company:verified});
        if(!user)
        {
            res.status(401).json("token not found in data base");
            com
        }
        else{
            res.status(200).send("access granted");
        }
        next();
    } catch(err){
        res.status(401).send('invalid Token');
    }
}

module.exports.auth = auth;
const jwt = require("jsonwebtoken");
//const check = require('./auth');
const User = require("../model/user");

async function auth(req, res, next) {
    check = req.headers.authorization.replace("Bearer ", "");
    console.log(check+"          (1)");

    if (!check) {
        return (
            res.status(401).send("token not found"), console.log("Acess denied")
        );
    }

    try {
        const verified = jwt.verify(check, process.env.SECRET);
        console.log(verified);
        const user = await User.findOne({ company: verified.token });
        console.log(user+("      (3)"));
        if (!user) {
            return res.status(401).json("token not found in data base");
        }
        res.status(200).send("access granted");
        next();
    } catch (err) {
        res.status(401).send("invalid Token");
    }
}

module.exports.auth = auth;








/*const jwt = require('jsonwebtoken');
//const check = require('./auth');
const User = require('../model/user')


async function auth(req,res,next)
{
  
    console.log(req.body)
    check = req.header("auth-token");
    
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

module.exports.auth = auth;*/
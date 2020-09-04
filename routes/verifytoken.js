const jwt = require("jsonwebtoken");
//const check = require('./auth');
const User = require("../model/user");

async function auth(req, res, next) {
    check = req.headers.authorization.replace("Bearer ", "");
    console.log(check);

    if (!check) {
        return (
            res.status(401).send("token not found"), console.log("Acess denied")
        );
    }

    try {
        const verified = jwt.verify(check, process.env.SECRET);
        console.log(verified);
        const user = await User.findOne({ company: verified.company });
        console.log(user);
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

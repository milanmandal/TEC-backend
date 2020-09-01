const jwt = require('jsonwebtoken');

function auth(req,res,next)
{
    
    const login= req.header('auth-token')

    if(!login){
    return (
        window.location='localhost:3000/',
        res.status(401).json('Access Denied'));
    }

    try {
        const verified = jwt.verify(login,process.env.SECRET);
        req.user = verified;
        next();
    } catch(err){
        res.status(400).send('invalid Token');
    }
}

module.exports = auth;
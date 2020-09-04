const router = require('express').Router();
const User = require('../model/user');
const jwt = require('jsonwebtoken');
const {registervalidate, loginvalidate} = require('../validation');
const bcrypt = require('bcryptjs');
//const auth = require('./verifytoken');


var token = "";


//GET USER TO CHECK IN DATABASE
router.route('/users').get((req,res)=>
{
    User.find()
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
})




//GET USER DETAILS AFTER LOGIN TO FRONTEND
router.get('/:id',(req,res)=>
{
    User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
})


//POST USER SCORE 
router.route('/score/:id').post((req,res) => {
    User.findById(req.params.id)
    .then(points => {
        points.email = req.body.email;
        points.password = req.body.password;
        points.company=req.body.company;
        points.token = req.body.token;
        points.score = req.body.score;
        
        points.save()
        .then(() => res.json(`user updates - `+points))
        .catch(err => res.status(400).json('Error: ' + err))
    })
    .catch(err => res.status(400).json('couldnt find: ' + err));
});




// REGISTER
router.post('/register', async (req,res)=>
{
    const {error} = registervalidate(req.body);
    if(error)  return res.status(400).send(error.details[0].message);
    

    //check if the email already exists
    const emailExists = await User.findOne({email :req.body.email});
    if(emailExists) return res.status(400).send('Email already exists');

    //HASH_PASSWORDS

    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(req.body.password,salt);

    const user = new User({

        email:req.body.email,
        password:hashpassword,
        company:req.body.company,
        token :jwt.sign({token: req.body.company},process.env.SECRET),

    });
    try {
        const savedUser =await user.save();
        res.send(savedUser);
        
        
        
        

    }catch(err){
        res.status(400).send(err);
    }
});



// LOGIN
router.post('/login', async (req,res)=>
{
    const {error} = loginvalidate(req.body);
    if(error)  return res.status(400).send(error.details[0].message);

    const user = await User.findOne({email :req.body.email});
    const pass = await bcrypt.compare(req.body.password,user.password);
    if(!user || !pass) 
    {
    return res.status(400).send('invalid credentials');
    }
    else
    {
        //GETTING WEB-TOKENS
        token = jwt.sign({email: user.email}, process.env.SECRET);
        res.header("auth-token",token);
        
        res.json(user)
    }
    
})










module.exports = router;
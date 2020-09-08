const router = require("express").Router();
const User = require("../model/user");
const jwt = require("jsonwebtoken");
const { registervalidate, loginvalidate } = require("../validation");
const bcrypt = require("bcryptjs");
//const auth = require('./verifytoken');

var token = "";

//GET USER TO CHECK IN DATABASE
router.route("/users").get((req, res) => {
    User.find()
        .then((user) => res.json(user))
        .catch((err) => res.status(400).json("Error: " + err));
});

//GET USER DETAILS AFTER LOGIN TO FRONTEND
router.get("/:id", (req, res) => {
    User.findById(req.params.id)
        .then((user) => res.json(user))
        .catch((err) => res.status(400).json("Error: " + err));
});








//POST USER SCORE-ROUND1
router.route("/score1/:id").post((req, res) => {
    User.findById(req.params.id)
        .then((points) => {
           
            points.score1 = req.body.score1;
            
            points
                .save()
                .then(() => res.json(`user updates - ` + points))
                .catch((err) => res.status(400).json("Error: " + err));
        })
        .catch((err) => res.status(400).json("couldnt find: " + err));
});


//POST USER SCORE-ROUND3
router.route("/score3/:id").post((req, res) => {
    User.findById(req.params.id)
        .then((points) => {
           
            points.score3 = req.body.score3;
            
            points
                .save()
                .then(() => res.json(`user updates - ` + points))
                .catch((err) => res.status(400).json("Error: " + err));
        })
        .catch((err) => res.status(400).json("couldnt find: " + err));
});


//POST PATH OF THE USER
router.route("/path/:id").post((req, res) => {
    User.findById(req.params.id)
        .then((route) => {
           
            route.page = req.body.path;
            
            route
                .save()
                .then(() => res.json(`user updates - ` + path))
                .catch((err) => res.status(400).json("Error: " + err));
        })
        .catch((err) => res.status(400).json("couldnt find: " + err));
});

// REGISTER
router.post("/register", async (req, res) => {
    const { error } = registervalidate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //check if the email already exists
    const emailExists = await User.findOne({ email: req.body.email });
    const teamExists = await User.findOne({ team: req.body.team });
    if (emailExists || teamExists) return res.status(400).send("Email or team-email already exists");

    //HASH_PASSWORDS

    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        email: req.body.email,
        team: req.body.team,
        password: hashpassword,
        company: req.body.company,
        token: jwt.sign({ company: req.body.company, email:req.body.email }, process.env.SECRET),
    });
    try {
        const savedUser = await user.save();
        res.send(savedUser);
    } catch (err) {
        res.status(400).send(err);
    }
});

// LOGIN
router.post("/login", async (req, res) => {
    const { error } = loginvalidate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const user = await User.findOne({ email: req.body.email });
    const team = await User.findOne({ team: req.body.email });
    
    if (user) {
        
        const userpass = await bcrypt.compare(req.body.password, user.password);
        if(userpass)
        {
            const token = jwt.verify(user.token, process.env.SECRET);
            console.log(token,".....MASTER-USER")
            res.json(user);
        }
        else{
            return res.status(400).send("invalid credentials");
        }
    
    } 
    else {
        if (team) {
        
            const teampass = await bcrypt.compare(req.body.password, team.password);
            if(teampass)
            {
                const token = jwt.verify(team.token, process.env.SECRET);
                console.log("TEAM-MEMBER")
                const member={
                    value:1,
                    company:team.company,
                    token:team.token,
                    id:team._id,
                    page:team.page,
                }
                console.log(member);
                res.json(member);
            }
            else{
                return res.status(400).send("invalid credentials");
            }
        
        } 
        else{
            return res.status(400).send("invalid credentials");
        }
        
       
    }
});

module.exports = router;

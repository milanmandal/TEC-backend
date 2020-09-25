const router = require("express").Router();
const User = require("../model/user");
const jwt = require("jsonwebtoken");
const { registervalidate, loginvalidate } = require("../validation");
const bcrypt = require("bcryptjs");
//const auth = require('./verifytoken');

var token = "";

//GET DETAILS OF ALL USERS IN DATABASE
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


// UPDATE (ROUND+PAGE) VALUES OF SPECIFIC USER
router.route("/setuser/:id").patch((req, res) => {
    User.findById(req.params.id)
        .then((detail) => {
           
            detail.score1 = 0;
            detail.score2 = 0;
            detail.score3 = 0;
            detail.page = "",
            detail.company1="None",
            detail.company2="None",
            detail.invest1=0,
            detail.invest2=0,
            
            detail
                .save()
                .then(() => res.json("user updates - " + detail))
                .catch((err) => res.status(400).json("Error: " + err));
        })
        .catch((err) => res.status(400).json("couldnt find: " + err));
});

// UPDATE (ROUND+PAGE) VALUES OF ALL USER
router.route("/setalluser").patch((req, res) => {
    
    User.updateMany({},
        {
            $set: 
            {
                score1: 0, 
                score2: 0, 
                score3: 0, 
                page: "",
                company1:"None",
                company2:"None",
                invest1:0,
                invest2:0
            }
        })

        .then(user => res.json(`user updates - ` + user))
        .catch((err) => res.status(400).json("couldnt find: " + err));
});


// UPDATE SPECIFIC (ROUND+PAGE) VALUES OF ALL USER
router.route("/setalluser/:data").patch((req, res) => {
    var round = req.params.data;
    if(round=="score1"){
    User.updateMany({},
        {
            score1:0
        })

        .then(user => res.json(`user updates - ` + user))
        .catch((err) => res.status(400).json("couldnt find: " + err));
    }
    if(round=="score2"){
        User.updateMany({},
            {
                score2:0
            })
    
            .then(user => res.json(`user updates - ` + user))
            .catch((err) => res.status(400).json("couldnt find: " + err));
        }
    if(round=="score3"){
        User.updateMany({},
            {
                score3:0
            })
    
            .then(user => res.json(`user updates - ` + user))
            .catch((err) => res.status(400).json("couldnt find: " + err));
        }
    if(round=="company1"){
    User.updateMany({},
        {
            company1:"None"
        })

        .then(user => res.json(`user updates - ` + user))
        .catch((err) => res.status(400).json("couldnt find: " + err));
    }
    if(round=="company2"){
        User.updateMany({},
            {
                company2:"None"
            })
    
            .then(user => res.json(`user updates - ` + user))
            .catch((err) => res.status(400).json("couldnt find: " + err));
        }
    if(round=="invest1"){
        User.updateMany({},
            {
                invest1:0
            })
    
            .then(user => res.json(`user updates - ` + user))
            .catch((err) => res.status(400).json("couldnt find: " + err));
        }
    if(round=="invest2"){
        User.updateMany({},
            {
                invest2:0
            })
    
            .then(user => res.json(`user updates - ` + user))
            .catch((err) => res.status(400).json("couldnt find: " + err));
        }
    if(round=="page"){
        User.updateMany({},
            {
                page:""
            })
    
            .then(user => res.json(`user updates - ` + user))
            .catch((err) => res.status(400).json("couldnt find: " + err));
        }
});



//UPDATE SPECIFIC (ROUNDS+PAGE) FOR SPECIFIC USER
router.route("/setuser/:data/:id").patch((req, res) => {
    var round = req.params.data;
    if(round=="score1"){
        User.updateMany({_id:req.params.id},
            {
                score1:0
            })

            .then(user => res.json(`user updates - ` + user))
            .catch((err) => res.status(400).json("couldnt find: " + err));
    }
    if(round=="score2"){
        User.updateMany({_id:req.params.id},
            {
                score2:0
            })
    
            .then(user => res.json(`user updates - ` + user))
            .catch((err) => res.status(400).json("couldnt find: " + err));
        }
    if(round=="score3"){
        User.updateMany({_id:req.params.id},
            {
                score3:0
            })
    
            .then(user => res.json(`user updates - ` + user))
            .catch((err) => res.status(400).json("couldnt find: " + err));
        }
    if(round=="company1"){
    User.updateMany({_id:req.params.id},
        {
            company1:"None"
        })

        .then(user => res.json(`user updates - ` + user))
        .catch((err) => res.status(400).json("couldnt find: " + err));
    }
    if(round=="company2"){
        User.updateMany({_id:req.params.id},
            {
                company2:"None"
            })
    
            .then(user => res.json(`user updates - ` + user))
            .catch((err) => res.status(400).json("couldnt find: " + err));
        }
    if(round=="invest1"){
        User.updateMany({_id:req.params.id},
            {
                invest1:0
            })
    
            .then(user => res.json(`user updates - ` + user))
            .catch((err) => res.status(400).json("couldnt find: " + err));
        }
    if(round=="invest2"){
        User.updateMany({_id:req.params.id},
            {
                invest2:0
            })
    
            .then(user => res.json(`user updates - ` + user))
            .catch((err) => res.status(400).json("couldnt find: " + err));
        }
    if(round=="page"){
        User.updateMany({_id:req.params.id},
            {
                page:""
            })
    
            .then(user => res.json(`user updates - ` + user))
            .catch((err) => res.status(400).json("couldnt find: " + err));
        }
})


// UPDATE (QUESTIONS) VALUES OF ALL USER
router.route("/question/alluser").patch((req, res) => {
    
    User.updateMany({},
        {
            $set: 
            {
                q1 : 0,
                q2 : 0,
                q3 : 0,
                q4 : 0,
                q5 : 0,
                q6 : 0,
                q7 : 0,
                q8 : 0,
                q9 : 0,
                q10 : 0,
            }
        })

        .then(set => res.json(`user updates - ` + set))
        .catch((err) => res.status(400).json("couldnt find: " + err));
});


// UPDATE (QUESTIONS) VALUES OF SPECIFIC USER
router.route("/question/user/:id").patch((req, res) => {
    
    User.updateMany({_id:req.params.id},
        {
            $set: 
            {
                q1 : 0,
                q2 : 0,
                q3 : 0,
                q4 : 0,
                q5 : 0,
                q6 : 0,
                q7 : 0,
                q8 : 0,
                q9 : 0,
                q10 : 0,
            }
        })

        .then(user => res.json(`user updates - ` + user))
        .catch((err) => res.status(400).json("couldnt find: " + err));
});


//SORTED USER BY SCORE
router.route("/finalscore").patch((req, res) => {
    var score = {total : -1}
    User.find({},{email:1,total:1}).sort(score)
    .then(user => res.send(user))
    .catch((err) => res.status(400).json("couldnt find: " + err));
})


//TIMER
router.route("/question/1/:id").post((req, res) => {
    User.findById(req.params.id)
        .then((question) => {
           
            question.q1 = req.body.flag;
            
            question
                .save()
                .then(() => res.json(`user updates - ` + question))
                .catch((err) => res.status(400).json("Error: " + err));
        })
        .catch((err) => res.status(400).json("couldnt find: " + err));
});




/****************************************************************************/
/****************************************************************************/
//CHECK FOR THE QUESTIONS ANSWERED IN EACH ROUND
/****************************************************************************/
/****************************************************************************/


router.route("/question/1/:id").post((req, res) => {
    User.findById(req.params.id)
        .then((question) => {
           
            question.q1 = req.body.flag;
            
            question
                .save()
                .then(() => res.json(`user updates - ` + question))
                .catch((err) => res.status(400).json("Error: " + err));
        })
        .catch((err) => res.status(400).json("couldnt find: " + err));
});
router.route("/question/2/:id").post((req, res) => {
    User.findById(req.params.id)
        .then((question) => {
           
            question.q2 = req.body.flag;
            
            question
                .save()
                .then(() => res.json(`user updates - ` + question))
                .catch((err) => res.status(400).json("Error: " + err));
        })
        .catch((err) => res.status(400).json("couldnt find: " + err));
});
router.route("/question/3/:id").post((req, res) => {
    User.findById(req.params.id)
        .then((question) => {
           
            question.q3 = req.body.flag;
            
            question
                .save()
                .then(() => res.json(`user updates - ` + question))
                .catch((err) => res.status(400).json("Error: " + err));
        })
        .catch((err) => res.status(400).json("couldnt find: " + err));
});
router.route("/question/4/:id").post((req, res) => {
    User.findById(req.params.id)
        .then((question) => {
           
            question.q4 = req.body.flag;
            
            question
                .save()
                .then(() => res.json(`user updates - ` + question))
                .catch((err) => res.status(400).json("Error: " + err));
        })
        .catch((err) => res.status(400).json("couldnt find: " + err));
});
router.route("/question/5/:id").post((req, res) => {
    User.findById(req.params.id)
        .then((question) => {
           
            question.q5 = req.body.flag;
            
            question
                .save()
                .then(() => res.json(`user updates - ` + question))
                .catch((err) => res.status(400).json("Error: " + err));
        })
        .catch((err) => res.status(400).json("couldnt find: " + err));
});
router.route("/question/6/:id").post((req, res) => {
    User.findById(req.params.id)
        .then((question) => {
           
            question.q6 = req.body.flag;
            
            question
                .save()
                .then(() => res.json(`user updates - ` + question))
                .catch((err) => res.status(400).json("Error: " + err));
        })
        .catch((err) => res.status(400).json("couldnt find: " + err));
});
router.route("/question/7/:id").post((req, res) => {
    User.findById(req.params.id)
        .then((question) => {
           
            question.q7 = req.body.flag;
            
            question
                .save()
                .then(() => res.json(`user updates - ` + question))
                .catch((err) => res.status(400).json("Error: " + err));
        })
        .catch((err) => res.status(400).json("couldnt find: " + err));
});
router.route("/question/8/:id").post((req, res) => {
    User.findById(req.params.id)
        .then((question) => {
           
            question.q8 = req.body.flag;
            
            question
                .save()
                .then(() => res.json(`user updates - ` + question))
                .catch((err) => res.status(400).json("Error: " + err));
        })
        .catch((err) => res.status(400).json("couldnt find: " + err));
});
router.route("/question/9/:id").post((req, res) => {
    User.findById(req.params.id)
        .then((question) => {
           
            question.q9 = req.body.flag;
            
            question
                .save()
                .then(() => res.json(`user updates - ` + question))
                .catch((err) => res.status(400).json("Error: " + err));
        })
        .catch((err) => res.status(400).json("couldnt find: " + err));
});
router.route("/question/10/:id").post((req, res) => {
    User.findById(req.params.id)
        .then((question) => {
           
            question.q10 = req.body.flag;
            
            question
                .save()
                .then(() => res.json(`user updates - ` + question))
                .catch((err) => res.status(400).json("Error: " + err));
        })
        .catch((err) => res.status(400).json("couldnt find: " + err));
});

/**************************************************************************/
/**************************************************************************/
/**************************************************************************/





/****************************************************************************/
/****************************************************************************/
//SETTING ORIGINAL STATE OF THE QUESTION IN EVERY COMPREHENSION ROUND
/****************************************************************************/
/****************************************************************************/

router.route("/reset/:id").post((req, res) => {
    User.findById(req.params.id)
        .then((question) => {
           
            question.q1 = req.body.flag;
            question.q2 = req.body.flag;
            question.q3 = req.body.flag;
            question.q4 = req.body.flag;
            question.q5 = req.body.flag;
            question.q6 = req.body.flag;
            question.q7 = req.body.flag;
            question.q8 = req.body.flag;
            question.q9 = req.body.flag;
            question.q10 = req.body.flag;
            
            question
                .save()
                .then(() => res.json(`user updates - ` + question))
                .catch((err) => res.status(400).json("Error: " + err));
        })
        .catch((err) => res.status(400).json("couldnt find: " + err));
});

/****************************************************************************/
/****************************************************************************/
/****************************************************************************/




/************************************************************************/
/************************************************************************/
//POST USER SCORE-ROUND1
/************************************************************************/
/************************************************************************/
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

/************************************************************************/
/************************************************************************/
/************************************************************************/






/************************************************************************/
/************************************************************************/
//POST USER SCORE-ROUND2 COMPANY NAME 1 & 2 INVESTMENT 1 & 2
/************************************************************************/
/************************************************************************/

//COMPANY 1
router.route("/company1/:id").post((req, res) => {
    User.findById(req.params.id)
        .then((points) => {
           
            points.company1 = req.body.companyName1;
            
            points
                .save()
                .then(() => res.json(`user updates - ` + points))
                .catch((err) => res.status(400).json("Error: " + err));
        })
        .catch((err) => res.status(400).json("couldnt find: " + err));
});

//COMPANY 2
router.route("/company2/:id").post((req, res) => {
    User.findById(req.params.id)
        .then((points) => {
           
            points.company2 = req.body.companyName2;
            
            points
                .save()
                .then(() => res.json(`user updates - ` + points))
                .catch((err) => res.status(400).json("Error: " + err));
        })
        .catch((err) => res.status(400).json("couldnt find: " + err));
});

//INVESTMENT 1
router.route("/invest1/:id").post((req, res) => {
    User.findById(req.params.id)
        .then((points) => {
           
            points.invest1 = req.body.invest1;
            
            points
                .save()
                .then(() => res.json(`user updates - ` + points))
                .catch((err) => res.status(400).json("Error: " + err));
        })
        .catch((err) => res.status(400).json("couldnt find: " + err));
});


//INVESTMENT 2
router.route("/invest2/:id").post((req, res) => {
    User.findById(req.params.id)
        .then((points) => {
           
            points.invest2 = req.body.invest2;
            
            points
                .save()
                .then(() => res.json(`user updates - ` + points))
                .catch((err) => res.status(400).json("Error: " + err));
        })
        .catch((err) => res.status(400).json("couldnt find: " + err));
});

// TOTAL SCORE OF ROUND 2
router.route("/score2/:id").post((req, res) => {
    User.findById(req.params.id)
        .then((points) => {
           
            points.score2 = req.body.score1;
            
            points
                .save()
                .then(() => res.json(`user updates - ` + points))
                .catch((err) => res.status(400).json("Error: " + err));
        })
        .catch((err) => res.status(400).json("couldnt find: " + err));
});
/************************************************************************/
/************************************************************************/
/************************************************************************/






/************************************************************************/
/************************************************************************/
//POST USER SCORE-ROUND3
/************************************************************************/
/************************************************************************/
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
/************************************************************************/
/************************************************************************/
/************************************************************************/


/************************************************************************/
/************************************************************************/
//POST USER TOTAL
/************************************************************************/
/************************************************************************/
router.route("/score3/:id").post((req, res) => {
    User.findById(req.params.id)
        .then((points) => {
           
            points.total = req.body.total;
            
            points
                .save()
                .then(() => res.json(`user updates - ` + points))
                .catch((err) => res.status(400).json("Error: " + err));
        })
        .catch((err) => res.status(400).json("couldnt find: " + err));
});
/************************************************************************/
/************************************************************************/
/************************************************************************/





//POST PATH OF THE USER
router.route("/path/:id").post((req, res) => {
    User.findById(req.params.id)
        .then((route) => {
           
            route.page = req.body.path;
            
            route
                .save()
                .then(() => res.json(`user updates - ` + route))
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
    if (emailExists) return res.status(400).send("Email or team-email already exists");

    //HASH_PASSWORDS

    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        email: req.body.email,
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
});

module.exports = router;

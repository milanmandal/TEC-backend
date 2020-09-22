const router = require ('express').Router();
const Admin = require('../model/admin.model');

router.route('/control').get((req, res) => {

    
    Admin.find()
    .then(control => res.json(control))
    .catch(err => res.status(400).json('Error: ' + err));
  
});


router.route('/addcontrol').post((req, res) => {
   
    
    const round1 = req.body.round1;
    const round2 = req.body.round2;
    const round3 = req.body.round3; 
  
  
    const newControl = new Admin({
     
     round1,
     round2,
     round3,
     
    });
  
    newControl.save()
    .then(() => res.send('controls data added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;
const router = require ('express').Router();
const {Finance,Production,Resdev,Sales} = require('../model/Tata.model');
const {CFinance,CProduction,CResDev,CSales} = require('../model/crisis.Tata');
const {auth}= require('../routes/verifytoken')

//ROUND 1 ANSWERS
router.route('/answer/finance/:id').post(auth,(req,res)=>{
  Finance.find(req.params.id)
         .then(answer =>{
           if(req.body.ans == answer.answer)
           {
              const value = {
                answer : 1,
              }
              res.json(value);
           }
           })
           .catch(err => res.status(400).json('Error: ' + err));
  });


  router.route('/answer/production/:id').post(auth,(req,res)=>{
    Production.find(req.params.id)
           .then(answer =>{
             if(req.body.ans == answer.answer)
             {
                const value = {
                  answer : 1,
                }
                res.json(value);
             }
             })
             .catch(err => res.status(400).json('Error: ' + err));
    });


    router.route('/answer/resdev/:id').post(auth,(req,res)=>{
      Resdev.find(req.params.id)
             .then(answer =>{
               if(req.body.ans == answer.answer)
               {
                  const value = {
                    answer : 1,
                  }
                  res.json(value);
               }
               })
               .catch(err => res.status(400).json('Error: ' + err));
      });


      router.route('/answer/sales/:id').post(auth,(req,res)=>{
        Sales.find(req.params.id)
               .then(answer =>{
                 if(req.body.ans == answer.answer)
                 {
                    const value = {
                      answer : 1,
                    }
                    res.json(value);
                 }
                 })
                 .catch(err => res.status(400).json('Error: ' + err));
        })



//ROUND3 QUESTIONS CALLS
router.route('/getcrisisfinance').get(auth,(req, res) => {
  CFinance.find({}, {rank1:0,rank2:0,rank3:0,rank4:0})
    .then(questions => res.json(questions))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/getcrisisproduction').get(auth,(req, res) => {
  CProduction.find({}, {rank1:0,rank2:0,rank3:0,rank4:0})
    .then(questions => res.json(questions))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/getcrisisresdev').get(auth,(req, res) => {
  CResDev.find({}, {rank1:0,rank2:0,rank3:0,rank4:0})
    .then(questions => res.json(questions))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/getcrisissales').get(auth,(req, res) => {
  CSales.find({}, {rank1:0,rank2:0,rank3:0,rank4:0})
    .then(questions => res.json(questions))
    .catch(err => res.status(400).json('Error: ' + err));
});



//ROUND 1 QUESTIONS CALL


router.route('/getfinance').get(auth,(req, res) => {
  Finance.find({},{answer:0})
    .then(questions => res.json(questions))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/getproduction').get(auth,(req, res) => {
  Production.find({},{question:1,option1:1,option2:1,option3:1,option4:1})
  .then(questions => res.json(questions))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/getresdev').get(auth,(req, res) => {
  Resdev.find({},{answer:0})
  .then(questions => res.json(questions))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/getsales').get(auth,(req, res) => {
  Sales.find({},{answer:0})
  .then(questions => res.json(questions))
  .catch(err => res.status(400).json('Error: ' + err));
});



router.route('/addfinance').post((req, res) => {
   
    const question = req.body.question;
    const option1 = req.body.option1;
    const option2 = req.body.option2;
    const option3 = req.body.option3;
    const option4 = req.body.option4;
    const answer = req.body.answer;


    const newFinance = new Finance({
     question,
     option1,
     option2,
     option3,
     option4,
     answer,
    });
  
    newFinance.save()
    .then(() => res.send('Finance data added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/addproduction').post((req, res) => {
   
  const question = req.body.question;
  const option1 = req.body.option1;
  const option2 = req.body.option2;
  const option3 = req.body.option3;
  const option4 = req.body.option4;
  const answer = req.body.answer;


  const newProduction = new Production({
   question,
   option1,
   option2,
   option3,
   option4,
   answer,
  });

  newProduction.save()
  .then(() => res.send('Production data added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/addresdev').post((req, res) => {
   
  const question = req.body.question;
  const option1 = req.body.option1;
  const option2 = req.body.option2;
  const option3 = req.body.option3;
  const option4 = req.body.option4;
  const answer = req.body.answer;


  const newResdev = new Resdev({
   question,
   option1,
   option2,
   option3,
   option4,
   answer,
  });

  newResdev.save()
  .then(() => res.send('Resdev data added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/addsales').post((req, res) => {
   
  const question = req.body.question;
  const option1 = req.body.option1;
  const option2 = req.body.option2;
  const option3 = req.body.option3;
  const option4 = req.body.option4;
  const answer = req.body.answer;


  const newSales = new Sales({
   question,
   option1,
   option2,
   option3,
   option4,
   answer,
  });

  newSales.save()
  .then(() => res.send('Sales data added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
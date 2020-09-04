const router = require("express").Router();
const Company = require("../model/company.model");
const { auth } = require("../routes/verifytoken");

router.get("/info", auth, (req, res) => {
    console.log(req.body);
    Company.find()
        .then((info) => res.json(info))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
    const name = req.body.name;
    const info = req.body.info;
    const finance = req.body.finance;
    const production = req.body.production;
    const rnd = req.body.rnd;
    const sales = req.body.sales;

    const newCompany = new Company({
        name,
        info,
        finance,
        production,
        rnd,
        sales,
    });

    newCompany
        .save()
        .then(() => {
            console.log(newCompany);
            return res.json({
                Status: "Company data added!",
                token: newCompany.token,
            });
        })
        .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;

const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieparser = require("cookie-parser");
const bodyParser = require("body-parser");
const User = require("./model/user");
const rateLimit = require("express-rate-limit");
const hpp = require('hpp');
const helmet = require("helmet");
const xss = require("xss-clean");
const mongoSanitize = require('express-mongo-sanitize');

//ENV-CONFIGURATION
dotenv.config();
const port = process.env.PORT || 5000;

//MONGODB CONNECTION
const uri =  process.env.ATLAS_USER;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
});


//API REQUEST LIMITER
const limiter = rateLimit({
    windowMs: 1000, // 1 secs
    max: 5,         // 5 requests
})



//MIDDLEWARE
app.use(express.json());
app.use(bodyParser.urlencoded());
app.use(cors());
app.use(cookieparser());
app.use(limiter);           // api limiter 5 per sec
app.use(hpp());             // prevent http interference
app.use(helmet());          // route protection
app.use(xss());             // cross scripting
app.use(mongoSanitize());   //prevent nosql interference







//ROUTES
const authRoute = require("./routes/auth");
app.use("/user", authRoute);

const companyRoute = require("./routes/company");
app.use("/company", companyRoute);

const LnTRoute = require("./routes/LnT");
app.use("/lnt", LnTRoute);

const RelianceRoute = require("./routes/Reliance");
app.use("/reliance", RelianceRoute);

const SonyRoute = require("./routes/Sony");
app.use("/sony", SonyRoute);

const TataRoute = require("./routes/Tata");
app.use("/tata", TataRoute);

const StockRoute = require("./routes/stocks");
app.use("/stock", StockRoute);

const AdminRoute = require("./routes/admin");
app.use("/admin", AdminRoute);

//PORT CONNECTION
app.listen(port, () => console.log(`Server is connected in port ${port}`));

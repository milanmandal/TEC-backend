const mongoose=require("mongoose");

const Schema = mongoose.Schema;

var sales=new Schema({
    passage:{
        type:String,
        unique:false,
        trim:true
    },
    question:{
        type:String,
        unique:false,
        trim:true
    },
    option1:{
        option:{
            type:String,
            unique:false,
            trim:true
        },

        rank:Number
    },
    option2:{
        option:{
            type:String,
            unique:false,
            trim:true
        },
        rank:Number
    },
    option3:{
        option:{
            type:String,
            unique:false,
            trim:true
        },
        rank:Number
    },
    option4:{
        option:{
            type:String,
            unique:false,
            trim:true
        },
        rank:Number
    },
   
});

const production=new Schema({
    passage:{
        type:String,
        unique:false,
        trim:true
    },
    question:{
        type:String,
        unique:false,
        trim:true
    },
    option1:{
        option:{
            type:String,
            unique:false,
            trim:true
        },
        rank:Number
    },
    option2:{
        option:{
            type:String,
            unique:false,
            trim:true
        },
        rank:Number
    },
    option3:{
        option:{
            type:String,
            unique:false,
            trim:true
        },
        rank:Number
    },
    option4:{
        option:{
            type:String,
            unique:false,
            trim:true
        },
        rank:Number
    },
    
});

const resdev=new Schema({
    passage:{
        type:String,
        unique:false,
        trim:true
    },
    question:{
        type:String,
        unique:false,
        trim:true
    },
    option1:{
        option:{
            type:String,
            unique:false,
            trim:true
        },
        rank:Number
    },
    option2:{
        option:{
            type:String,
            unique:false,
            trim:true
        },
        rank:Number
    },
    option3:{
        option:{
            type:String,
            unique:false,
            trim:true
        },
        rank:Number
    },
    option4:{
        option:{
            type:String,
            unique:false,
            trim:true
        },
        rank:Number
    },
    
});

const finance=new Schema({
    passage:{
        type:String,
        unique:false,
        trim:true
    },
    question:{
        type:String,
        unique:false,
        trim:true
    },
    option1:{
        option:{
            type:String,
            
        },
        rank:Number
    },
    option2:{
        option:{
            type:String,
            
        },
        rank:Number
    },
    option3:{
        option:{
            type:String,
            
        },
        rank:Number
    },
    option4:{
        option:{
            type:String,
           
        },
        rank:Number
    },
    
});
/*{
    "passage":"The person who has invested the most in L&T is Morgan ",
    "question":" Hence what will be the next move of L&T keeping in mind that this new company is Morgan Stanley’s rivalry company and he is not wanting to jointly invest with them on any of the upcoming project",
    "option1":{"option":"a) L&T will change the terms and conditions in such a way that will favor Morgan the most and tell that L&T will negotiate with ST Ltd to change the ongoing deal with best profits for Morgan.","rank":3},
    "option2":{"option":"brhbr","rank":9},
    "option3":{"option":"rjbhe","rank":9},
    "option4":{"option":"behbwhewk","rank":9},
    "answer":{
        "rankone":1,
        "rankttwo":2,
        "rankthree":3,
        "rankfour":4
    }
} */

const CFinance=mongoose.model("Tatacrisisfinance",finance);
const CSales=mongoose.model("Tatacrisissale",sales);
const CResDev=mongoose.model("TatacrisisResDev",resdev);
const CProduction=mongoose.model("TatacrisisProduction",production);

module.exports.CFinance = CFinance;
module.exports.CProduction = CProduction;
module.exports.CResDev = CResDev;
module.exports.CSales = CSales;
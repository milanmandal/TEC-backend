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




const CFinance=mongoose.model("Reliancecrisisfinance",finance);
const CSales=mongoose.model("Reliancecrisissale",sales);
const CResDev=mongoose.model("ReliancecrisisResDev",resdev);
const CProduction=mongoose.model("ReliancecrisisProduction",production);

module.exports.CFinance = CFinance;
module.exports.CProduction = CProduction;
module.exports.CResDev = CResDev;
module.exports.CSales = CSales;
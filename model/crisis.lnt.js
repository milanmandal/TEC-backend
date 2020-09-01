var mongoose=require("mongoose");

var Schema = mongoose.Schema;

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

var CFinance=mongoose.model("LNTcrisisfinance",finance);
var CSales=mongoose.model("LNTcrisissale",sales);
var CResDev=mongoose.model("LNTcrisisResDev",resdev);
var CProduction=mongoose.model("LNTcrisisProduction",production);

module.exports.CFinance = CFinance;
module.exports.CProduction = CProduction;
module.exports.CResDev = CResDev;
module.exports.CSales = CSales;
var mongoose=require("mongoose")

var UserSchema=new mongoose.Schema({
    email:{
        type:String,
        require:true,
    },
    team:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    token:String,
    company:{
        type:String,
        require:true,
    },
    score1:{
        type:Number,
        default:0
    },
    score2:{
        type:Number,
        default:0,
    },
    score3:{
        type:Number,
        default:0
    },
    max:{
        type:Number,
        default:0,
    },
    page:{
        type:String,
        default:'',
    },

        q1:{
            type:Number,
            default:0,
        },
        q2:{
            type:Number,
            default:0,
        },
        q3:{
            type:Number,
            default:0,
        },
        q4:{
            type:Number,
            default:0,
        },
        q5:{
            type:Number,
            default:0,
        },
        q6:{
            type:Number,
            default:0,
        },
        q7:{
            type:Number,
            default:0,
        },
        q8:{
            type:Number,
            default:0,
        },
        q9:{
            type:Number,
            default:0,
        },
        q10:{
            type:Number,
            default:0,
        },

 
        company1:{
            type:String,
            default:'None',
        },
        invest1:{
            type:Number,
            default:0,
        },
        company2:{
            type:String,
            default:'None',
        },
        invest2:{
            type:Number,
            default:0,
        },
      




})


module.exports=mongoose.model("UserEntry",UserSchema)
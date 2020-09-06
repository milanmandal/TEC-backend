var mongoose=require("mongoose")

var UserSchema=new mongoose.Schema({
    email:{
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
    score:{
        type:Number,
        default:0
    },
    invest:{
        type:Number,
        default:0,
    },
    max:{
        type:Number,
        default:0,
    },
    page:{
        type:Number,
        default:1,
    }

})


module.exports=mongoose.model("UserEntry",UserSchema)
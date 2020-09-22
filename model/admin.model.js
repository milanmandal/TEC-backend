const mongoose = require('mongoose');

const adminschema = new mongoose.Schema({

    round1:{
        type : Number,
        default : 0,
    },
    round2:{
        type : Number,
        default : 0,
    },
    round3:{
        type : Number,
        default : 0,
    }
});

const Admin = mongoose.model('AdminControl',adminschema);

module.exports = Admin;
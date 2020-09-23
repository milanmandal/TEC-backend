const mongoose = require('mongoose');

const adminschema = new mongoose.Schema({

    round1:{
        type : String,
        default : '0',
    },
    round2:{
        type : String,
        default : '0',
    },
    round3:{
        type : String,
        default : '0',
    }
});

const Admin = mongoose.model('Admin',adminschema);

module.exports = Admin;
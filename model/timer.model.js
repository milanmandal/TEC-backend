const mongoose = require('mongoose');

const timerschema = new mongoose.Schema({

    round1:{
        type : String,
        default : '2020-09-24 2:00:00',
    },
    round2:{
        type : String,
        default : '2020-09-24 2:00:00',
    },
    round3:{
        type : String,
        default : '2020-09-24 2:00:00',
    }
});

const Timer = mongoose.model('Timer',timerschema);

module.exports = Timer;
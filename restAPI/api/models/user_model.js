const mongoose = require('mongoose');
let Schema = mongoose.Schema;
const user_db = mongoose.createConnection('mongodb://localhost:27017/user_db');

let user_schema = new Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    pass:{
        type:String,
    }
},{
    versionKey:false,
    collection:'user_details'
});

module.exports = user_db.model('user_model',user_schema);
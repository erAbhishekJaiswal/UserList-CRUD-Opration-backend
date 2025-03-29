const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    firstname:{
        type: String,
        required :true
    },
    lastname:{
        type: String,
        required :false
    },
    email:{
        type: String,
        required :true
    },
    password:{
        type: String,
        required :true
    },
},{
    timestamps:true
});

const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;

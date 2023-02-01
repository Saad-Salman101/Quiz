const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name:{
        type: String,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    usertype:{
        type:String,
        required: true
    },
    subject:{
        type:String,

    },
    date:{
        type: Date,
        default: Date.now
    },
    
  });
  const User = mongoose.model('user', UserSchema);
  module.exports = User;
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
    subject:{
        type:String,

    },
    date:{
        type: Date,
        default: Date.now
    },
    score:{
        type: Number,
        default: 0
    },
    test:{
        type: Number,
        default: 0
    }
    
  });
  const User = mongoose.model('user', UserSchema);
  module.exports = User;
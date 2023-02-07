const mongoose = require('mongoose');
const { Schema } = mongoose;

const TeacherSchema = new Schema({
    name:{
        type: String,
        required: true
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
    date:{
        type: Date,
        default: Date.now
    },
    subject:{
        type: String,
    },
    usertype:{
        type:String,
        default:"teacher"
    },
    subject:{
        type:String,
        default:"none"
    },
  });
  const User = mongoose.model('teacheruser', TeacherSchema);
  module.exports = User;
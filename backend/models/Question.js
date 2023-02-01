const mongoose = require('mongoose');
const { Schema } = mongoose;

const QuestionSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    usertype:{
        type:String,
        ref:'usertype'
    },
    currentquestion:{
        type: String,
        required: true,
        unique:true
    },
    option1:{
        type: String,
        required: true
    },
    option2:{
        type: String,
        required: true
    },
    option3:{
        type: String,
        required: true
    },
    option4:{
        type: String,
        required: true
    },
    answer:{
        type: String,
        required: true
    },
  });
  const User = mongoose.model('Question', QuestionSchema);
  module.exports = User;
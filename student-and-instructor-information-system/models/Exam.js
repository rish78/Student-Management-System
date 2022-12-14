const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Exam schema
const ExamSchema = new Schema({

    examName: {
        type : String
    },
    description : {
        type: String
    },
    date : {
        type : Date
    }
});

//creating model
const Exam = mongoose.model('exam', ExamSchema);

module.exports = Exam;
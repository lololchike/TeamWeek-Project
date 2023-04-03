const mongoose = require('mongoose')

const studentModel = mongoose.Schema({
    firstName: String,
    middleName: String,
    lastName: String,
    studentNumber: Number, 
    academicYear: String,
    program:String,
    phoneNumber: String,
    email: String,
    address: String,
    dateEnrolled: {type:String,
       default: new Date()},
       dateforsorting: {type:Number,
        default: Date.now()}
    
})

module.exports = mongoose.model("Students", studentModel)
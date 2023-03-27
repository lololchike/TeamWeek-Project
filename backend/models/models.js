const mongoose = require('mongoose')

const studentModel = mongoose.Schema({
    firstName: String,
    middleName: String,
    lastName: String,
    studentNumber: Number,
    academicYear: String,
    program:String,
    phoneNumber: Number,
    email: String,
    address: String,
    dateEnrolled: {type:String,
       default: new Date()}
})

module.exports = mongoose.model("Students", studentModel)
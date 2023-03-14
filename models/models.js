const mongoose = require('mongoose')

const studentModel = mongoose.Schema({
    firstName:String,
    middleName:String,
    lastName:String,
    studentNumber:Number,
    academicYear:String,
    program:String,
    phoneNumber:Number,
    email:String,
    address:String,
})

module.exports = mongoose.model("Students", studentModel)

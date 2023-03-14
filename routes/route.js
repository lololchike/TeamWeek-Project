const express = require('express')

const router = express.Router()

const studentData = require('../models/models')

router.post("/",(req,res) => {
    const datatosend = new studentData ({
    firstName:req.body.Firstname,
    middleName:req.body.Middlename,
    lastName:req.body.Lastname,
    studentNumber:req.body.number,
    academicYear:req.body.Academic,
    program:req.body.Program,
    phoneNumber:req.body.Phone,
    email:req.body.email,
    address:req.body.address,
})
datatosend.save()
})

module.exports = router
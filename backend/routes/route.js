const express = require("express");

const router = express.Router();

const studentData = require("../models/models");

router.get('/thanks', (req, res) => {
    res.sendFile('thanks.html', { root: '../frontend1/public' });
  });

  router.get('/students', async (req, res) => {
 const allStudents = await studentData.find({})
 res.send(allStudents)
  });

router.post("/", (req, res) => {
  const datatosend = new studentData({
    firstName: req.body.firstname,
    middleName: req.body.middlename,
    lastName: req.body.lastname,
    studentNumber: req.body.number,
    academicYear: req.body.year,
    program: req.body.program,
    phoneNumber: req.body.Phone,
    email: req.body.email,
    address: req.body.address,
    
  });
  datatosend.save();
  res.redirect("/thanks");
});

module.exports = router;

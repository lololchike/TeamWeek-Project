const express = require("express");

const router = express.Router();

const studentData = require("../models/models");

//get route for all students
router.get("/students", async (req, res) => {
  const allStudents = await studentData.find({}).sort({
    dateforsorting:-1});  
  res.send(allStudents);
});

//get route for one student
router.get("/students/:id", (req, res) => {
  studentData.findById(req.params.id).then((student) => {
    res.send(student);
  });
});

// get route for searching students 
router.get("/search/:key", async (req, res) => {
  let foundStudents = await studentData.find({"$or": [
    {
      firstName: {$regex: req.params.key}
    },
    {
      middleName: {$regex: req.params.key}
    },
    {
      lastName: {$regex: req.params.key}
    }, 
    {
      academicYear: {$regex: req.params.key}},
    {
      program: {$regex: req.params.key}
    }, 
    {
      email: {$regex: req.params.key}
       },
       {
        address: {$regex: req.params.key}
        },
        
        {
          phoneNumber: {$regex: req.params.key}
          },
  ]}
    )
  res.send(foundStudents)
})

//post route
router.post("/join", (req, res) => {
  const datatosend = new studentData({
    firstName: req.body.firstname,
    middleName: req.body.middlename,
    lastName: req.body.lastname,
    studentNumber: req.body.number,
    academicYear: req.body.year,
    program: req.body.program,
    phoneNumber: req.body.phone.toString(),
    email: req.body.email,
    address: req.body.address,
  });
  datatosend.save();
  res.redirect("/thanks");
});

// updatestudent route
router.put("/students/:id", async (req, res) => {
  let newDetailes = await studentData.updateOne(
    { _id: req.params.id},
    { $set: req.body}
  );
  res.send(newDetailes)
});

//delete route
router.delete("/students/:id", async (req, res) => {
  let deletionresult = await studentData.deleteOne({ _id: req.params.id });
  res.send(deletionresult);
});

module.exports = router;

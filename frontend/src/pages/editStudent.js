import Button from "react-bootstrap/Button";
import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import { useParams, useNavigate } from "react-router-dom";

const EditStudent = () => {
  const [firstName, setFirstName] = React.useState("");
  const [middleName, setMiddleName] = React.useState("");
  const [lastName, setLastName] = React.useState("");

  const [phoneNumber, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [academicYear, setYear] = React.useState("");
  const [program, setCourse] = React.useState("");
  const navigate = useNavigate()

  const studentParams = useParams();
  useEffect(() => {
    getStudentDetails();
  }, []);

  const getStudentDetails = async () => {
    console.warn(studentParams);
    let student = await fetch(`/api/students/${studentParams.id}`);
    student = await student.json();
    console.warn(student);
    setFirstName(student.firstName);
    setMiddleName(student.middleName);
    setLastName(student.lastName);
    setPhone(student.phoneNumber);
    setEmail(student.email);
    setAddress(student.address);
    setYear(student.academicYear);
    setCourse(student.program);
  };

  const form = document.getElementById("updateStudentForm") 
  const updateStudent = async (e) => {
    
    if (form.checkValidity()) {
      e.preventDefault();
    if (window.confirm("Are you sure you wanna save the new details?") === true) {
   
    let newDetailes = await fetch(`/api/students/${studentParams.id}`, {
      method: "Put",
      body: JSON.stringify({
      firstName,middleName,lastName,phoneNumber,email,address,academicYear,program,
      }),
      headers: {
        "Content-Type": "Application/json",
      },
    });
    newDetailes = await newDetailes.json()
    alert(`${firstName}'s details successfully updated, click ok to go to all students page`)
    }
    navigate("/students")
} 
};
  return (
    <div className="joinUsForm">
      <strong>
        <p className="editingText">
          Editing {firstName} {lastName}
        </p>
      </strong>
      <h6>Enter new details below</h6>
      <Form id="updateStudentForm">
        <span className="studentNames">
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control
            required
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              size="sm"
              type="name"
              placeholder="First Name"
              name="firstname"
              
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="">
            <Form.Label>Middle Name</Form.Label>
            <Form.Control
              onChange={(e) => setMiddleName(e.target.value)}
              value={middleName}
              size="sm"
              type="name"
              placeholder="Middle Name"
              required
              name="middlename"
              
            />
          </Form.Group>
          <Form.Group className="mb-3" type="name">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              value={lastName}
              size="sm"
              placeholder="Last Name"
              name="lastname"
              required
              onChange={(e) => setLastName(e.target.value)}
              
            />
          </Form.Group>
        </span>
        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
          value={phoneNumber}
            size="sm"
            type="tel"
            placeholder="Phone Number"
            onChange={(e) => setPhone(e.target.value)}
            pattern="\d{10}"
            required
            title="Please enter a 10-digit number"
          
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            size="sm"
            type="email"
            placeholder="Email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Current Address</Form.Label>
          <Form.Control
            value={address}
            size="sm"
            type="address"
            placeholder="Current Address"
            name="address"
            required
            onChange={(e) => setAddress(e.target.value)}
            
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>What's your current level?</Form.Label>
          <Form.Select
            value={academicYear}
            size="sm"
            aria-label="Default select example"
            required
            onChange={(e) => setYear(e.target.value)}
          
          >
            <option value="1st Year">1st Year"</option>
            <option value="2nd Year">2nd Year"</option>
            <option value="3rd Year">3rd Year"</option>
            <option value="4th Year">4th Year"</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>And your course?</Form.Label>
          <Form.Select
            value={program}
            size="sm"
            aria-label="Default select example"
            onChange={(e) => setCourse(e.target.value)}
          >
            <option value="Business Administration">Bachelor of Business Administration</option>
        <option value="Information Systems">Bachelor of Science in Computer Information Systems</option>
        <option value="Nursing">Bachelor of Science in Nursing</option>
        <option value="Community Health">Bachelor of Science in Community Health</option>
        <option value="Pharmacy">Bachelor of Pharmacy</option>
        <option value="International Relations">Bachelor of International Relations</option>
        <option value="Msc Information Systems">Master of Science in Computer Information Systems</option>
        <option value="Master of Business Administration">Master of Business Administration</option>
        <option value="MSc Finance and Investment"> Master of Science in Finance and Investment</option>
        <option value="PhD Business Administration and Management">Doctor of Philosophy in Business Administration and Management</option>
        <option value="PhD Health Systems Management">Doctor of Philosophy in Health Systems Management</option>
        <option value="Bachelor of Medicine">Bachelor of Medicine & Bachelor of Surgery (MB.ChB)</option>
          </Form.Select>
        </Form.Group>
        <Button type="submit" variant="dark" onClick={updateStudent}>
          Save
        </Button>
      </Form>
    </div>
  );
};

export default EditStudent;

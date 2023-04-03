import Button from "react-bootstrap/Button";
import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import { useParams, useNavigate } from "react-router-dom";

const EditStudent = () => {
  const [firstName, setFirstName] = React.useState("");
  const [middleName, setMiddleName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [year, setYear] = React.useState("");
  const [course, setCourse] = React.useState("");
  const navigate = useNavigate()

  const studentParams = useParams();
  useEffect(() => {
    getStudentDetails();
  }, []);

  const getStudentDetails = async () => {
    console.warn(studentParams);
    let student = await fetch(`/students/${studentParams.id}`);
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

    
  const updateStudent = async () => {

    if (window.confirm("Are you sure you wanna save the new details?") === true) {
   
    let newDetailes = await fetch(`/students/${studentParams.id}`, {
      method: "Put",
      body: JSON.stringify({
      firstName,middleName,lastName,phone,email,address,year,course,
      }),
      headers: {
        "Content-Type": "Application/json",
      },
    });
    newDetailes = await newDetailes.json()
    alert(`${firstName}'s details successfully updated, click ok to go to all students page`)
    navigate("/students")}
  };
  return (
    <div className="joinUsForm">
      <strong>
        <p className="editingText">
          Editing {firstName} {lastName}
        </p>
      </strong>
      <h6>Enter new details below</h6>
      <Form>
        <div className="studentNames">
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control
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
              onChange={(e) => setLastName(e.target.value)}
            />
          </Form.Group>
        </div>
        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            value={phone}
            size="sm"
            type="tel"
            placeholder="Phone Number"
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
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
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>What's your current level?</Form.Label>
          <Form.Select
            value={year}
            size="sm"
            aria-label="Default select example"
            name="year"
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
            value={course}
            size="sm"
            aria-label="Default select example"
            name="program"
            onChange={(e) => setCourse(e.target.value)}
          >
            <option value="D1">Bachelor of Business Administration</option>
            <option value="D2">
              Bachelor of Science in Computer Information Systems
            </option>
            <option value="D3">Bachelor of Science in Nursing</option>
            <option value="D4">Bachelor of Science in Community Health</option>
            <option value="D5">Bachelor of Pharmacy</option>
            <option value="D6">Bachelor of International Relations</option>
            <option value="D7">
              Master of Science in Computer Information Systems
            </option>
            <option value="D8">Master of Business Administration</option>
            <option value="D9">
              {" "}
              Master of Science in Finance and Investment
            </option>
            <option value="D10">
              Doctor of Philosophy in Business Administration and Management
            </option>
            <option value="D11">
              Doctor of Philosophy in Health Systems Management
            </option>
            <option value="D12">
              Bachelor of Medicine & Bachelor of Surgery (MB.ChB)
            </option>
          </Form.Select>
        </Form.Group>
        <Button variant="dark" onClick={updateStudent}>
          Send
        </Button>
      </Form>
    </div>
  );
};

export default EditStudent;

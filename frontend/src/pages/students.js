import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';

function Students() {


  const [students, setStudents] = useState([]);

 useEffect(() => {
   getStudents()
  }, []);

  const getStudents = async () => {
    await fetch("/api/students")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => {
        setStudents(jsonRes);
      });
  };
  
  const handleDelete = async (id) => {
    if (window.confirm("This will permanently remove the student from the database, YOU CAN'T UNDO THIS! Click ok to proceed") == true) {
      let deleteStudent = await fetch (`/students/${id}`, {
        method: 'Delete'
      } )
      deleteStudent = await deleteStudent.json();
      if(deleteStudent) {
        getStudents()
       
      }
      else{}
    }
    
  }
  const handleSearch = async (event) => {
    let key = (event.target.value).toLowerCase()
    if(key){
    let searchResult = await fetch(`/search/${key}`)
    searchResult = await searchResult.json()
    if(searchResult) {
    setStudents(searchResult)}}
    else {
      getStudents()
    }
  }

  const redactNumber = (number, redactedNumber) => {
    redactedNumber =""
          for (let i=0; i<10; i++){
            
              if (i>=3 && i<=6){
                redactedNumber += "X"
              }
              else{
                redactedNumber += number[i]
              }
          }
          return redactedNumber
          }
  return (
    <>
    <div className="search">
    <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search student"
              className="me-2"
              aria-label="Search"
              onChange={handleSearch}
            />  </Form>
    </div>
    <div>
    <h5 id="showing">Showing {students.length} students</h5></div>
      <div className="studentPageDiv">
      
        {students.map((student) => (
          
          <div className="student" key={student._id}>
            <div id="student-avatar">
              <h5>{student.firstName[0].toUpperCase()}{student.middleName[0].toUpperCase()}{student.lastName[0].toUpperCase()}</h5>
            </div>
           <div className="studentInfo"><p><strong>Name:</strong> {student.firstName} {student.middleName} {student.lastName}</p>
            <p><strong>Joined On: </strong>{student.dateEnrolled.slice(0, 21)}</p>
            <p><strong>Phone No:</strong> {redactNumber(student.phoneNumber)}</p>
            <p><strong>Acad Year: </strong>{student.academicYear} </p>
            <p><strong>Lives In:</strong> {student.address}</p>
            {/* <p><strong>Email:</strong> {student.email}</p>  */}
            <p><strong>Course:</strong> {student.program}</p>
            </div> 
            <div className="editDelete">
            <Link to= {`/students/${student._id}`}>
              <Button as="input" type="button" value="Edit" size="sm" id="student-Button"/></Link>
              <Button as="input" type="button" value="Delete" size="sm" variant="warning" onClick={() => handleDelete(student._id)} id="student-Button"/>
            </div>
            <br />
          </div>
        ))}
      </div>
    </>
  );
}

export default Students;  
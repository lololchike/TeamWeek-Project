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
    await fetch("/students")
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((jsonRes) => setStudents(jsonRes));
  }
  
  const handleDelete = async (id) => {
    if (window.confirm("This will permanently remove the student from the database, YOU CAN'T UNDO THIS! Click ok to proceed") == true) {
      let deleteStudent = await fetch (`/students/${id}`, {
        method: 'Delete'
      } )
      deleteStudent = await deleteStudent.json();
      if(deleteStudent) {
        getStudents()
        // alert(`Student successfully deleted from our database!`)
      }
      else{}
    }
    // confirm("This will permanently remove the student from database, you can't undo this! Click ok to proceed")
    
  }
  const handleSearch = async (event) => {
    let key = event.target.value
    if(key){
    let searchResult = await fetch(`/search/${key}`)
    searchResult = await searchResult.json()
    if(searchResult) {
    setStudents(searchResult)}}
    else {
      getStudents()
    }

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
    <h4>Showing {students.length} students</h4></div>
      <div className="studentPageDiv">
      
        {students.map((student) => (
          
          <div className="student" key={student._id}>
           <div className="studentInfo"><p><strong>Name:</strong> {student.firstName} {student.middleName} {student.lastName}</p>
            <p><strong>Joined On: </strong>{student.dateEnrolled.slice(0, 21)}</p> 
            <p><strong>Phone No:</strong> {student.phoneNumber}</p>
            <p><strong>Acad Year: </strong>{student.academicYear} </p>
            <p><strong>Course:</strong> {student.program}</p>
            <p><strong>Email:</strong> {student.email}</p> </div> 
            <div className="editDelete">
            <Link to= {`/students/${student._id}`}>
              <Button as="input" type="button" value="Edit" size="sm"/></Link>
              <Button as="input" type="button" value="Delete" size="sm" variant="warning" onClick={() => handleDelete(student._id)}/>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Students;

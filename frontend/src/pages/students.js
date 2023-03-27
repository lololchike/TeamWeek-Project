import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("/students")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setStudents(jsonRes));
  }, []);
  console.log(students);

  return (
    <>
    <div><h4>Showing {students.length} students</h4></div>
      <div className="studentPageDiv">
        {students.map((student) => (
          <div className="student">
            {`Name: ${student.firstName} ${student.middleName} ${student.lastName}
          Joined on: ${student.dateEnrolled}
          Phone No: ${student.studentNumber}
          Acad Year: ${student.academicYear} 
          Course: ${student.program}
          Email: ${student.email}`}
            <div className="editDelete">
              {" "}
              <Button as="input" type="button" value="Edit" size="sm"/>
              <Button as="input" type="button" value="Delete" size="sm" variant="warning"/>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Students;

import React from 'react'
import Student from './Student'

const StudentList1 = () => {

  const filteredStudents = Student.filter(student => {
    return student.percentage > 33;
  })
  return (
    <>
      <h2>Passes Student List</h2>
      {filteredStudents.map((student, index) => {
        <Student2
          key={index}
          name={student.name}
          rollNumber={student.rollNumber}
          percentage={student.percentage}
        />
      })}
    </>
  )
}

export default StudentList1
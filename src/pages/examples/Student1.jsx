import React from 'react'

const Student1 = ({name = "Kundan", rollNumber=31}) => {
  return (
    <>
      <p>
        Student Name: {name}
        <br />
        Roll Number: {rollNumber}
      </p>
    </>
  )
}

export default Student1
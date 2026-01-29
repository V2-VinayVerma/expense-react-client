import React from 'react'

const UserCard = (props) => {
  return (
    <>
    <h1>Name: {props.name}</h1>
    <p>
      Age: {props.age}
      <br />
      Location: {props.location}
    </p>
    <p>Premium: {props.isPremium=="true" ?"Vip":"Standard"}</p>

    </>
  )
}

export default UserCard
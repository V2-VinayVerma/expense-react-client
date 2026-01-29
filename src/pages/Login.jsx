import React, { useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import './Login.css'

const Login = () => {
  const [formData, setformData] = useState({
    email: '',
    password: ''
  })


  const [errors, seterrors] = useState('')

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setformData({
      ...formData,
      [name]: value //
    })
  }

  const validate = () => {
    let newErrors = {};
    let isValid = true;

    if (formData.email.length === 0) {
      newErrors.email = "Email is required";
      isValid = false;
    }
    if (formData.password.length === 0) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    seterrors(newErrors);
    return isValid;

  }

  const handleFormSubmit = (event) => {
    event.preventDefault(); // prevents default ebhaviour of relaoding the page on submission of form

    if (validate()) {
      console.log("Valid Form");
    } else {
      console.log("Invalid Form")
    }
  }

  return (
    <div children="container">
      <h3>Login to continue...</h3>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Email: </label>
          <input
            className='form-control'
            type="text"
            name='email'
            onChange={handleChange} />

            {errors.email && (errors.email)}
        </div>

        <div>
          <label >Password:</label>
          <input
            className='form-control'
            type="password"
            name="password"
            onChange={handleChange} />
             {errors.password && (errors.password)}
        </div>

        <button>Login</button>
      </form>

    </div>
  )
}

export default Login
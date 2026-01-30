import React, { useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import './Login.css'

function Login ({setUserDetails}) {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({})
  const [message, setMessage] = useState('')

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({
      ...formData,
      [name]: value
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

    setErrors(newErrors);
    return isValid;
  }

const handleFormSubmit = async (event) => {
  event.preventDefault();

  if (!validate()) return;

  try {
    const body = {
      email: formData.email,
      password: formData.password,
    };

    const config = { withCredentials: true };
    const response = await axios.post('http://localhost:3000/auth/login', body, config);
    setUserDetails(response.data.user);
    setMessage("Login successful! Redirecting to dashboard...");
    
    setTimeout(() => {
      navigate('/dashboard')
    }, 1000)
  }
  catch (error) {
    console.log("error", error.response?.data?.message || error.message);
    setErrors({
      message: error.response?.data?.message || "Something went wrong, please try again"
    })
  }
}

return (
  <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
    <Row className="w-100">
      <Col md={6} lg={4} className="mx-auto">
        <div className="login-form-container">
          <h3 className="login-title mb-4">Login to continue...</h3>
          {message && <div className="alert alert-success">{message}</div>}
          {errors.message && <div className="alert alert-danger">{errors.message}</div>}
          <form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3">
              <label className="form-label">Email</label>
              <input
                className='form-input form-control'
                type="email"
                name='email'
                placeholder="Enter your email"
                onChange={handleChange}
                value={formData.email} />
              {errors.email && <small className="text-danger d-block mt-2">{errors.email}</small>}
            </Form.Group>

            <Form.Group className="mb-4">
              <label className="form-label">Password</label>
              <input
                className='form-input form-control'
                type="password"
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
                value={formData.password} />
              {errors.password && <small className="text-danger d-block mt-2">{errors.password}</small>}
            </Form.Group>

            <button type="submit" className="login-btn btn btn-primary w-100 text-white">Login</button>
          </form>

          <p className="text-center mt-3">
            Don't have an account? <Link to="/register">Register here</Link>
          </p>
        </div>
      </Col>
    </Row>
  </Container>
  )
}

export default Login
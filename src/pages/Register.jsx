import React, { useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import './Login.css'

function Register({ setUserDetails }) {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [errors, setErrors] = useState({})
  const [message, setMessage] = useState('')

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value

    setFormData({ 
      ...formData,
      [name]: value
    })
  }

  const validate = () => {
    let newErrors = {}
    let isValid = true

    if (formData.name.length === 0) {
      newErrors.name = "Name is required"
      isValid = false
    }

    if (formData.email.length === 0) {
      newErrors.email = "Email is required"
      isValid = false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
      isValid = false
    }

    if (formData.password.length === 0) {
      newErrors.password = "Password is required"
      isValid = false
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
      isValid = false
    }

    if (formData.confirmPassword.length === 0) {
      newErrors.confirmPassword = "Please confirm your password"
      isValid = false
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault()

    if (!validate()) return

    try {
      const body = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      }

      const config = { withCredentials: true }
      const response = await axios.post('http://localhost:3000/auth/register', body, config)
      
      setUserDetails(response.data.user)
      setMessage("Registration successful! Redirecting to dashboard...")
      
      // Navigate to dashboard after successful registration
      setTimeout(() => {
        navigate('/dashboard')
      }, 1000)
    }
    catch (error) {
      console.log("error", error.response?.data?.message || error.message)
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
            <h3 className="login-title mb-4">Create an Account</h3>
            {message && <div className="alert alert-success">{message}</div>}
            {errors.message && <div className="alert alert-danger">{errors.message}</div>}
            <form onSubmit={handleFormSubmit}>
              <Form.Group className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  className='form-input form-control'
                  type="text"
                  name='name'
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <small className="text-danger d-block mt-1">{errors.name}</small>}
              </Form.Group>

              <Form.Group className="mb-3">
                <label className="form-label">Email</label>
                <input
                  className='form-input form-control'
                  type="email"
                  name='email'
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <small className="text-danger d-block mt-1">{errors.email}</small>}
              </Form.Group>

              <Form.Group className="mb-3">
                <label className="form-label">Password</label>
                <input
                  className='form-input form-control'
                  type="password"
                  name='password'
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && <small className="text-danger d-block mt-1">{errors.password}</small>}
              </Form.Group>

              <Form.Group className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input
                  className='form-input form-control'
                  type="password"
                  name='confirmPassword'
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                {errors.confirmPassword && <small className="text-danger d-block mt-1">{errors.confirmPassword}</small>}
              </Form.Group>

              <Button variant="primary" className="w-100 mb-3" type="submit">
                Register
              </Button>
            </form>

            <p className="text-center mt-3">
              Already have an account? <Link to="/login">Login here</Link>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Register

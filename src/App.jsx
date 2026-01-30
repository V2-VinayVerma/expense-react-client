import { useState } from 'react'
import Container from 'react-bootstrap/Container'

import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import AppLayout from './components/AppLayout'
import DashboardLayout from './components/DashboardLayout'
import Header from './components/Header'
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard'




function App() {
  const [count, setCount] = useState(0)
  const [userDetails, setUserDetails] = useState(null)
  return (
    <>

      <Routes>
        <Route path='/' element={userDetails ? (<Navigate to='/dashboard' />) :
          (
            <AppLayout>
              <Home />
            </AppLayout>)
        } />

        <Route path='/login' element={userDetails ? (<Navigate to='/dashboard' />) :
          (
            <AppLayout>
              <Login setUserDetails={setUserDetails} />
            </AppLayout>)
        } />

        <Route path='/register' element={userDetails ? (<Navigate to='/dashboard' />) :
          (
            <AppLayout>
              <Register setUserDetails={setUserDetails} />
            </AppLayout>)
        } />

        <Route
          path='/dashboard' element={userDetails ? (
            <DashboardLayout setUserDetails={setUserDetails}>
              <Dashboard user={userDetails} />
            </DashboardLayout>
          ) :
            (
              <Navigate to='/login' />
            )} />
      </Routes>

    </>
  )
}

export default App



import { useState } from 'react'
import Container from 'react-bootstrap/Container'

import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import AppLayout from './components/AppLayout'
import Header from './components/Header'
import Footer from './components/Footer'


const products = [
  { id: 1, name: "Laptop", price: 999, category: "Electronics" },
  { id: 2, name: "Coffee Maker", price: 49, category: "Home" },
  { id: 3, name: "Smartphone", price: 699, category: "Electronics" }
];


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Routes>
        <Route path='/' element={
          <AppLayout>
            <Home />
          </AppLayout>
        } />

        <Route path='/login' element={
          <AppLayout>
            <Login />
          </AppLayout>
        } />
      </Routes>

    </>
  )
}

export default App



import { useState } from 'react'

import Student1 from './pages/examples/Student1'
import Student4 from './pages/examples/Student4'
import Student5 from './pages/examples/Student5'
import UserCard from './pages/practice/UserCard'
import ProductList from './pages/practice/ProductList'


const products = [
  { id: 1, name: "Laptop", price: 999, category: "Electronics" },
  { id: 2, name: "Coffee Maker", price: 49, category: "Home" },
  { id: 3, name: "Smartphone", price: 699, category: "Electronics" }
];


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>Expense - React - Client
      {/* <Student5/> */}
      {/* <UserCard name="Vinay Verma" age="20" location="Jalandhar" isPremium="true"/>
      <UserCard name="Neha Verma" age="22" location="Chandigarh" isPremium="false"/>
      <UserCard name="Nishant Verma" age="23" location="Amritsar" isPremium="true"/> */}


      <ProductList products={products} />

    </div>

  )
}

export default App



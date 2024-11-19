import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Product from './Components/Product'
import {Routes, Route} from 'react-router-dom'
import Products from './Components/Products'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />

        {/* Dynamic Route */}
        <Route path="/product/:id" element={<Product/>} />
      </Routes>
    </>
  )
}

export default App

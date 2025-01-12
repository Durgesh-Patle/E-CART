import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Product from './Components/Product'
import {Routes, Route} from 'react-router-dom'
import Products from './Components/Products'
import Carts from './Components/Carts'
import Register from './Components/Register'
import Login from './Components/Login'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path='/cart' element={<Carts/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>

        {/* Dynamic Route */}
        <Route path="/product/:id" element={<Product/>} />
      </Routes>
    </>
  )
}

export default App

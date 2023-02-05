import React from 'react'
import "./App.css"
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import About from './components/about/About'
import Blog from './components/blog/Blog'
import Home from './components/home/Home'
import Navbar from "./components/header/Navbar"
import AllProducts from './components/myStore'
import ProductDetailPage from './components/myStore/ProductDetailPage'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/allproducts" element={<AllProducts/>}/>
        <Route path="/allproducts/product/:productId" exact element={<ProductDetailPage/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App

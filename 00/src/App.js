import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react'

//Style
import './App.css'

//Components
import Header from './components/Header/Header'
import Footer from './components/Footer'

//Pages
import Home from './pages/Home'
import ContactForm from './pages/ContactForm'
import ShoppingCart from './pages/ShoppingCart'



function App() {

  let [products, setProducts] = useState([])
  let [loading, setLoading] = useState(false)
  let [currentPage, setCurrentPage] = useState(1)
  let [productsPerPage] = useState(12)
  let [totalProducts, setTotalProducts] = useState('')
  let [categories, setCategories] = useState('')


  let [url, setUrl] = useState(`https://dummyjson.com/products?limit=${productsPerPage}&skip=${productsPerPage * (currentPage - 1)}`)


  //Page selection
  function paginate(pageNumber) {
    return (setCurrentPage(pageNumber), setUrl((`https://dummyjson.com/products?limit=${productsPerPage}&skip=${productsPerPage * (pageNumber - 1)}`)))
  }




  useEffect(() => {
    async function fetchProducts() {
      setLoading(true)
      await fetch(url)
        .then(res => res.json())
        .then(res => {
          setProducts(res.products)
          setTotalProducts(res.total)
          setLoading(false)
        })
    }
    fetchProducts()
  }, [url])



  useEffect(() => {
     async function fetchCategories() {
        setLoading(true)
        await fetch('https://dummyjson.com/products/categories')
           .then(res => res.json())
           .then(res => {
              setCategories(res)
              setLoading(false)
           })
     }
     fetchCategories()
  }, [])

  return (
    <BrowserRouter>
      <Header loading={loading} setLoading={setLoading}/>
      <Routes>
        <Route
          path='/'
          element={
            <Home
              products={products}
              loading={loading}
              totalProducts={totalProducts}
              currentPage={currentPage}
              productsPerPage={productsPerPage}
              paginate={paginate}
            />}
        />
        <Route
          path='/ContactForm'
          element={
            <ContactForm
            />}
        />
        <Route
          path='/ShoppingCart'
          element={
            <ShoppingCart
            />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );

}



export default App

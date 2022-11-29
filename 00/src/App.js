import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//Style
import './App.css';
import './Colors.css';
import './pages/Home/Home.css';

//Components
import Header from './components/Header/Header';
import Footer from './components/Footer';
import Search from './components/Header/Search';

//Pages
import Home from './pages/Home/Home';
import ContactForm from './pages/ContactForm';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  /*   let [products, setProducts] = useState([])
  let [loading, setLoading] = useState(false)
  let [currentPage, setCurrentPage] = useState(1)
  let [productsPerPage] = useState(12)
  let [totalProducts, setTotalProducts] = useState('')
  let [categories, setCategories] = useState([])
  let [select, setSelect] = useState('')
  let [input, setInput] = useState('')
  let params = useParams() */

  //Returns all products
  let [url, setUrl] = useState(
    `https://dummyjson.com/products?limit=${productsPerPage}&skip=${
      productsPerPage * (currentPage - 1)
    }`
  );

  //Returns products by category
  function filterByCategory(selected) {
    return setUrl('https://dummyjson.com/products/category/' + selected);
  }

  //Returns products by input search
  function filterBySearch(search) {
    return (
      console.log(search),
      setUrl('https://dummyjson.com/products/search?q=' + search),
      console.log(url)
    );
  }

  //Page selection
  function paginate(pageNumber) {
    return (
      setUrl(''),
      setCurrentPage(pageNumber),
      setUrl(
        `https://dummyjson.com/products?limit=${productsPerPage}&skip=${
          productsPerPage * (pageNumber - 1)
        }`
      )
    );
  }

  /*   useEffect(() => {
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
  }, [url, select]) */

  useEffect(() => {
    async function fetchCategories() {
      setLoading(true);
      await fetch('https://dummyjson.com/products/categories')
        .then((res) => res.json())
        .then((res) => {
          let categories = res.map((category) => {
            return (
              category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()
            );
          });
          setCategories(categories);
          setLoading(false);
        });
    }
    fetchCategories();
  }, [select, url]);

  return (
    <BrowserRouter>
      <Header
        loading={loading}
        categories={categories}
        input={input}
        setInput={setInput}
        filterByCategory={filterByCategory}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              url={props.url}
              products={products}
              loading={loading}
              totalProducts={totalProducts}
              currentPage={currentPage}
              productsPerPage={productsPerPage}
              paginate={paginate}
            />
          }
        />
        <Route
          path="/category/:search"
          element={
            <Search
              search={input}
              products={products}
              loading={loading}
              totalProducts={totalProducts}
              currentPage={currentPage}
              productsPerPage={productsPerPage}
              paginate={paginate}
            />
          }
        />
        <Route path="/ContactForm" element={<ContactForm />} />
        <Route path="/ShoppingCart" element={<ShoppingCart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

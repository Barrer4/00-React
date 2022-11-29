import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Style
import './App.css';

//Bootstrap Components
import Container from 'react-bootstrap/Container';

//Components
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import Footer from './components/Footer';
import CartPage from './pages/CartPage';

function App() {
  let [currentPage] = useState(1);
  let [productsPerPage] = useState(12);

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

  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Header filterByCategory={filterByCategory} />
        </header>
        <main>
          <Container>
            <Routes>
              <Route path="/" element={<HomePage url={url} setUrl={setUrl}/>} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

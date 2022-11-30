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
import LoginPage from './pages/LoginPage';
import LoadingStatus from './components/LoadingStatus';
import NotFoundPage from './pages/NotFoundPage';
import PaymentPage from './pages/PaymentPage';
import CategoryPage from './pages/CategoryPage';

function App() {
  let [currentPage] = useState(1);
  let [productsPerPage] = useState(12);
  let [category, setCategory] = useState('');
  let loading = false;
  let [cartItems, setCartItems] = useState([]);

  //Returns all products
  let [url, setUrl] = useState(
    `https://dummyjson.com/products?limit=${productsPerPage}&skip=${
      productsPerPage * (currentPage - 1)
    }`
  );

  //Returns products by category
  function filterByCategory(option) {
    return (
      setUrl(''),
      setCategory(option),
      setUrl('https://dummyjson.com/products/category/' + option),
      console.log(option)
    );
  }

  //To add products to the cart
  function plusItem(item) {
    let exist = cartItems.find((x) => x.id === item.id);
    if (exist) {
      setCartItems((x) =>
        x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x
      );
    } else {
      setCartItems([...cartItems, { ...item, qty: 1 }]);
    }
  }

  if (loading) {
    return <LoadingStatus />;
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
              <Route
                path="/category/:category"
                element={
                  <CategoryPage
                    category={category}
                    url={url}
                    setUrl={setUrl}
                    filterByCategory={filterByCategory}
                    cartItems={cartItems}
                    setCartItems={setCartItems}
                    plusItem={plusItem}
                  />
                }
              />
              <Route
                path="/"
                element={
                  <HomePage
                    url={url}
                    setUrl={setUrl}
                    cartItems={cartItems}
                    setCartItems={setCartItems}
                    plusItem={plusItem}
                  />
                }
              />

              <Route
                path="/product/:id"
                element={<ProductPage url={url} plusItem={plusItem} />}
              />
              <Route
                path="/cart"
                element={
                  <CartPage
                    cartItems={cartItems}
                    setCartItems={setCartItems}
                    plusItem={plusItem}
                  />
                }
              />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/payment" element={<PaymentPage />} />
              <Route path="/*" element={<NotFoundPage />} />
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

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
import LoadingStatus from './components/LoadingStatus';
import NotFoundPage from './pages/NotFoundPage';
import Search from './components/Search';
import { Navbar } from 'react-bootstrap';
import ErrorStatus from './components/ErrorStatus';

function App() {
  let [currentPage] = useState(1);
  let [productsPerPage] = useState(12);
  let [category, setCategory] = useState('all');
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
      setUrl('https://dummyjson.com/products/category/' + option)
    );
  }

  //To search products
  function search(query) {
    return setUrl('https://dummyjson.com/products/search?q=' + query);
  }

  //To add products to the cart
  function addItem(newItem) {
    let itemExists = cartItems.find(
      (itemInCart) => itemInCart.id === newItem.id
    );
    if (itemExists) {
      setCartItems(
        cartItems.map((itemInCart) =>
          itemInCart.id === newItem.id
            ? { ...itemInCart, quantity: itemInCart.quantity + 1 }
            : itemInCart
        )
      );
    } else {
      setCartItems([...cartItems, { ...newItem, quantity: 1 }]);
    }
  }

  //To remove products from the cart
  function removeItem(oldItem) {
    let itemExists = cartItems.find(
      (itemInCart) => itemInCart.id === oldItem.id
    );
    if (itemExists.quantity === 1) {
      setCartItems(
        cartItems.filter((itemInCart) => itemInCart.id !== oldItem.id)
      );
    } else {
      setCartItems(
        cartItems.map((itemInCart) =>
          itemInCart.id === oldItem.id
            ? { ...itemInCart, quantity: itemInCart.quantity - 1 }
            : itemInCart
        )
      );
    }
  }

  if (loading) {
    return <LoadingStatus />;
  }

  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Header
            filterByCategory={filterByCategory}
            cartItems={cartItems}
            productsPerPage={productsPerPage}
            currentPage={currentPage}
          />
        </header>
        <main>
          <Container>
            <Routes>
              <Route
                path="/category/:category"
                element={
                  <HomePage
                    category={category}
                    url={url}
                    setUrl={setUrl}
                    filterByCategory={filterByCategory}
                    addItem={addItem}
                    search={search}
                  />
                }
              />

              <Route
                path="/"
                element={
                  <HomePage
                    url={url}
                    setUrl={setUrl}
                    addItem={addItem}
                    filterByCategory={filterByCategory}
                    category={category}
                    search={search}
                  />
                }
              />

              <Route
                path="/product/:id"
                element={<ProductPage url={url} addItem={addItem} />}
              />
              <Route
                path="/cart"
                element={
                  <CartPage
                    addItem={addItem}
                    removeItem={removeItem}
                    cartItems={cartItems}
                  />
                }
              />
              <Route path="/error" element={<ErrorStatus />} />
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

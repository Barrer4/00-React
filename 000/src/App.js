import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

//Style
import './App.css';
import './colors.css';
import 'react-toastify/dist/ReactToastify.css';

//Bootstrap Components
import Container from 'react-bootstrap/Container';

//Pages
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ContactUs from './pages/ContactUs';
import LogInPage from './pages/LogInPage';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';
import SignInPage from './pages/SignInPage';

//Components
import Header from './components/Header';
import Footer from './components/Footer';
import LoadingStatus from './components/LoadingStatus';
import ErrorStatus from './components/ErrorStatus';
import CheckOut from './components/CheckOut';

function App() {
  let [currentPage] = useState(1);
  let [productsPerPage] = useState(12);
  let [category, setCategory] = useState('all');
  let loading = false;

  let [user, setUser] = useState(
    localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user'))
      : null
  );

  let [cartItems, setCartItems] = useState(
    localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : []
  );

  //Returns all products
  let [url, setUrl] = useState(
    `https://dummyjson.com/products?limit=${productsPerPage}&skip=${
      productsPerPage * (currentPage - 1)
    }`
  );

  //Returns products by category
  function filterByCategory(option) {
    setUrl('');
    setCategory(option);
    setUrl('https://dummyjson.com/products/category/' + option);
  }

  //To search products
  function search(query) {
    setUrl('https://dummyjson.com/products/search?q=' + query);
  }

  //To check user
  function logIn(user) {
    setUser(user);
    toast.info('Login successful');
    localStorage.setItem('user', JSON.stringify(user));
    if (cartItems.length < 0) {
      <Route to="/cart" />;
    } else {
      <Route to="/" />;
    }
  }

  //To logout user
  function signOut() {
    setUser({});
    localStorage.removeItem('user');
    toast.info('Logout successful');
    window.location.reload();
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
            ? { ...itemInCart, quantity: ++itemInCart.quantity }
            : itemInCart
        )
      );
    } else {
      setCartItems([...cartItems, { ...newItem, quantity: 1 }]);
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
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
            ? { ...itemInCart, quantity: --itemInCart.quantity }
            : itemInCart
        )
      );
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }

  function deleteItem(oldItem) {
    let itemExists = cartItems.find(
      (itemInCart) => itemInCart.id === oldItem.id
    );
    if (itemExists) {
      setCartItems(
        cartItems.filter((itemInCart) => itemInCart.id !== oldItem.id)
      );
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }

  if (loading) {
    return <LoadingStatus />;
  }

  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <ToastContainer position="bottom-center" limit={1} />
        <header>
          <Header
            filterByCategory={filterByCategory}
            cartItems={cartItems}
            productsPerPage={productsPerPage}
            currentPage={currentPage}
            user={user}
            signOut={signOut}
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
              <Route path="/contactus" element={<ContactUs />} />

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
                    deleteItem={deleteItem}
                    cartItems={cartItems}
                    user={user}
                  />
                }
              />
              <Route path="/login" element={<LogInPage logIn={logIn} />} />
              <Route path="/error" element={<ErrorStatus />} />
              <Route path="/*" element={<NotFoundPage />} />

              <Route path="/signin" element={<SignInPage />} />
              <Route path="/checkout" element={<CheckOut signOut={signOut} />} />
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

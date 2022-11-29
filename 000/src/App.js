import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Style
import './App.css'

//Bootstrap Components
import Container from 'react-bootstrap/Container';

//Components
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Header />
        </header>
        <main>
          <Container>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product/:id" element={<ProductPage />} />
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

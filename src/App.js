import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Catalog from './pages/Catalog/Catalog';
import Home from './pages/Home/Home';
import News from './pages/News/News';
import Contact from './pages/Contact/Contact';
import Delivery from './pages/Delivery/Delivery';
import AboutUs from './pages/AboutUs/AboutUs';
import Private from './pages/Private/Private';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/private" element={<Private />} />
        <Route path="/news" element={<News />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/aboutUs" element={<AboutUs />} /> 
      </Routes>
    </Router>
  );
}

export default App;

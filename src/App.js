import './App.css';


import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './Screens/Home/Home';

import About from './Screens/About/About';
import Features from './Screens/Features/Features';
import Creator from './Screens/Creator/Creator';
import Seller from './Screens/Seller/Seller';
import Footer from './components/Footer/Footer';
import Contacts from './Screens/Contacts/Contacts';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/creator" element={<Creator />} />
        <Route path="/seller" element={<Seller />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import BookCall from './pages/BookCall';
import KnowledgeBase from './pages/KnowledgeBase';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/book-call" element={<BookCall />} />
        <Route path="/knowledge-base" element={<KnowledgeBase />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

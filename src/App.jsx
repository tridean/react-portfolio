import React from 'react';
import "./tailwind.css";
import Header from './components/Header';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';

function App() {

  return (
      <div className="App">
        <Header />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
  )
}

export default App

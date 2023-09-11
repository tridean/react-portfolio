import React from 'react';
import "./tailwind.css";
import Header from './components/Header';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';

function App() {
  const appStyles = {
    backgroundColor: 'blanchedalmond', 
    minHeight: '100vh', 
  };

  return (
      <div className="App" style={appStyles}>
        <Header />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
  )
}

export default App

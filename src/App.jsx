import React from 'react';
import "./tailwind.css";
import Intro from './components/Intro';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';

function App() {

  return (
      <div className="App">
        <Intro />
        <Portfolio />
        <Projects />
        <Contact />
        <Footer />
      </div>
  )
}

export default App

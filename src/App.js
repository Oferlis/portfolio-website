import React from 'react'
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Navbar from './components/Navbar';
import About from './components/About';
import './App.css';

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </main>
  );
}

export default App;

import React from 'react'
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Navbar from './components/Navbar';
import About from './components/About';
import './App.css';

function App() {
  return (
    <main className="text-gray-400 bg-white body-font content-center">
      <div className='w-11/12 bg-[#FFD495] flex flex-col rounded-lg items-center'>
        <Navbar/>
        <About/>
        <Projects/>
        <Skills/>
        <Contact/>
      </div>
    </main>
  );
}

export default App;

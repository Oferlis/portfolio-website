import React from 'react'
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Navbar from './components/Navbar';
import About from './components/About';
import './App.css';

function App() {
  return (
    <main className="text-gray-400 bg-[#EEEFF1] body-font content-center">
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap" rel="stylesheet"/>
      <div className= 'flex flex-col rounded-lg items-center mx-2 my-1'>
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

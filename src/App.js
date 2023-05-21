import React from 'react'
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Navbar from './components/Navbar';
import About from './components/About';
import './App.css';

function App() {
  return (
    <main className="bg-[#EEEFF1] body-font">
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap" rel="stylesheet"/>
      <div className= 'flex flex-col mx-36 mb-8'>
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

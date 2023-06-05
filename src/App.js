import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ProjectsPage from './components/ProjectsPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<ProjectsPage/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

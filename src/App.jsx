import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';
import About from './components/About/About';
import Project from './components/Project/Project';
const App = () => {
  return (
    <div>
     <Navbar/>
     <Main/>
     <About/>
     <Skills/>
     <Project/>
     <Contact/>
    </div>
  );
}

export default App;

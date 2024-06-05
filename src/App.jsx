import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';
const App = () => {
  return (
    <div>
     <Navbar/>
     <Main/>
     <Skills/>
     <Contact/>
    </div>
  );
}

export default App;

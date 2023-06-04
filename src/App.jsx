import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css"
import "./components/Header"
import Header from './components/Header';
import Post from './Post';

function App() {
  return (

    // <Router>
    // <div className="pt-20">

    // </div> 
    // </Router>
    <main>
      <Header/>
      <Post/>
      
    
    </main>
  )
}

export default App

// \\\  <Routes>
//         <Route path="/" element={<Home />}/>
//         <Route path="/about" element={<About />} />
//       </Routes>

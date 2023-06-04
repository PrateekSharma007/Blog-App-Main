import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css"
import "./components/Header"
import Header from './components/Header';
import Post from './Post';
import Layout from './Layout';
import Login from './Pages/Login';
import Registerpage from './Pages/Registerpage';

function App() {
  return (

    <Routes>
      <Route path = "/" element = {<Layout/>} >
        <Route index element = {<Post/>}/>
        <Route path = {'/login'} element = {<Login/>}/>
        <Route path = {'/register'} element = {<Registerpage/>} />
      </Route>  
    </Routes>
      
      
    
  
  )
}

export default App

// \\\  <Routes>
//         <Route path="/" element={<Home />}/>
//         <Route path="/about" element={<About />} />
//       </Routes>

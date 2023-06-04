import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='header'>
    
        <Link to="/">MyBlog</Link>
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>

    </div>
  )
}

export default Header;
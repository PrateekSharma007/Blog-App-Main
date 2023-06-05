import React from 'react'
import Header from '../components/Header'
import "./login.css";

const Login = () => {
  return (
    <form className = "login">
        <input type="text"  placeholder='username'/>
        <input type="password" placeholder='password'/>
        <button>Login</button>
    </form>
  )
}

export default Login
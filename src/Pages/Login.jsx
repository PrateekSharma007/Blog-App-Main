import React from 'react'
import Header from '../components/Header'

const Login = () => {
  return (
    <form>
        <input type="text"  placeholder='username'/>
        <input type="password" />
        <button>Login</button>
    </form>
  )
}

export default Login
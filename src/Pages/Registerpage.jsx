import React from 'react'
import "./register.css"

const Registerpage = () => {
  return (
    <form className='register'>
        <input type="text"  placeholder='username'/>
        <input type="password" placeholder='password'/>
        <button>Register</button>
    </form>
  )
}

export default Registerpage
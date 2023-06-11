import React, { useState } from 'react'
import "./register.css"

const Registerpage = () => {
  const [username,setUsername] = useState("") ; 
  const [password , setPassword] = useState("");
  async function register(e){
    e.preventDefault() ;
      await fetch('http://localhost:5000/register', {
      method : "POST" ,
      body : JSON.stringify({username,password}),
      headers : {"Content-Type" : "application/json"}
    })
  }

  return (
    <form className='register' onSubmit={register}>
        <input type="text"  placeholder='username' value = {username} onChange={e => setUsername(e.target.value)}/>
        <input type="password" placeholder='password' value = {password} onChange={e => setPassword(e.target.value)}/>
        <button>Register</button>
    </form>
  )
}

export default Registerpage
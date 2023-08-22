import { useState } from 'react'
import React from 'react'
import './login.css'
import axios  from 'axios'
import { useNavigate } from 'react-router-dom'






const Login = ({setLoginUser}) => {
  const navigate=useNavigate()




  const[user,setUser]=useState({
   
    email:"",
    password:""
    
  })

  const handlechange=e=>{
    const{name,value}=e.target
    console.log(name,value)
    setUser({
      ...user,
      [name]:value
    })
  }

  const login=()=>{
    axios.post("http://localhost:9002/login",user)
    .then(res=>{
      alert(res.data.message)
      setLoginUser(res.data.user)
      navigate("/")
    
  })
}













  return (
    <div className='login'>
      
      <h1>Login</h1>
      <input type='text' placeholder='Enter your email' name='email' value={user.email} onChange={handlechange}></input>
      <input type='password' placeholder='Enter your password' name='password' onChange={handlechange} value={user.password}></input>
      <div className='button' onClick={login}>Login</div>
      <div>or</div>
      <div className='button' onClick={()=>navigate("/register")}>Register</div>
      
    </div>
  )
}

export default Login

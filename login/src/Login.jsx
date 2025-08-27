import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Login = () => {
const [email,setEamil]=useState('')
const [password,setPassword]=useState('')
const [msg ,setMsg]=useState('')


    const navigte=useNavigate()


const handleInput = (event)=>{
  const value = event.target.value;
  const name = event.target.name;
  if('email'== name){
    setEamil(value)
  }
  if('password'== name){
    setPassword(value)
  }
}

const handleSubmit =(event)=>{
  event.preventDefault();
  if(email == ''|| password == ''){
    alert('please enter details !')
  }
  else{

    let getDetials = JSON.parse(localStorage.getItem('user'))
    console.log(getDetials);
    getDetials.map((yadav)=>{
      console.log(yadav.password);
      let storeEmail = yadav.email;
      let storePassword = yadav.password;

      if(storeEmail == email && storePassword == password){
        alert('success full Login !')
        navigte('/')
      }
      else{
        return setMsg('invelaid email or password')
      }
    })
  
  }
}


  return (
    <div>
      <div>
      <p>{msg}</p>
         <form onSubmit={handleSubmit}>
                <div className='heading'>
                    <p>Login</p>
                </div>
                <div className='account'>
                <input type='text' name='email' placeholder='email' onChange={handleInput}/> 
                <input type='password' name='password' placeholder='password' onChange={handleInput}/> 
                <p>if you have to crea a account ? <a href='/Signup'>Signup</a></p>  
             </div>
             <button>Login</button>
            </form>
      </div>
    </div>
  )
}

export default Login
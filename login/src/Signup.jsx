import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const useDetails ={
        name:'',
        email:'',
        password:''

    }
    const [data,setData]=useState(useDetails)

    const navigte=useNavigate()


const handleInput =(event)=>{
// console.log(event.target.value);
// console.log(event.target.name);
const name =event.target.name;
const value =event.target.value;
setData({...data,[name]:value})

}

const handleSubmit =(event)=>{
    event.preventDefault();
    if(data.name == '' || data.email == ''|| data.password ==''){
        alert('pelace fill all form')
    }
    else{
        const getData = JSON.parse(localStorage.getItem('user') || '[]');
        let arr = [];
        arr = [...getData];
        arr.push(data)


        localStorage.setItem('user',JSON.stringify(arr))
        alert('Sign-up successfully ')
        navigte('/Login')
    }
}


  return (
    <div>
        <div>
            <form onSubmit={handleSubmit}>
                <div className='heading'>
                    <p>signup</p>
                </div>
                <div className='account'>
                <input type='text' name='name' placeholder='name' onChange={handleInput}/> 
                <input type='email' name='email' placeholder='email' onChange={handleInput}/> 
                <input type='password' name='password' placeholder='password' onChange={handleInput}/> 
                <p>already have a account ? <a href='/Login'>Login</a></p>  
             </div>
             <button>Signup</button>
            </form>
        </div>
    </div>
  )
}

export default Signup
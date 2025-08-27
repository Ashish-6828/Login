import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

      const navigte=useNavigate()

      const logout=()=>{
        localStorage.removeItem('user')
        navigte('/Signup')
      }
  return (
    <div>

<h1>welcome ower world</h1>
<button onClick={logout}>Logout</button>
    </div>
  )
}

export default Home
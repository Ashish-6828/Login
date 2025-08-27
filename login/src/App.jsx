import React from 'react'
import{BrowserRouter , Routes,Route} from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Signup from './Signup'

const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
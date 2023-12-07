import React from 'react'

import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home/Home'
import Auth from '../pages/Auth/Auth'
import Auth2 from '../pages/Auth/Auth2'
import Questions from '../pages/Questions/Questions'
import AskQuestion from '../pages/AskQuestion/AskQuestion'

const AllRoutes = () => {
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Auth' element={<Auth />}/>
    <Route path='/Auth2' element={<Auth2 />}/>
    <Route path='/Questions' element={<Questions />}/>
    <Route path='/AskQuestion' element={<AskQuestion />}/>
   </Routes>
  )
}

export default AllRoutes

import React from 'react'

import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home/Home'
import Auth from '../Auth/Auth'

const AllRoutes = () => {
  return (
   <Routes>
    <Route path='/' Component={Home}/>
    <Route path='/Auth' Component={Auth}/>
   </Routes>
  )
}

export default AllRoutes

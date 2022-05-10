import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine'
import Input from './Input'
import Recipe from './Recipe'



import {Routes, Route} from 'react-router-dom'

function Index() {
  return (
    
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cuisine/:type' element={<Cuisine />} />
            <Route path='/input/:input'element={<Input />} />
            <Route path='/recipe/:id' element={<Recipe />} />
        </Routes>
    
  )
}

export default Index
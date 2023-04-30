import React from 'react'
import './index.css'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
const AppRouter = () => {
  return (
    <div className='appRouter'>
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
    </div>
  )
}

export default AppRouter
import React from 'react'
import './Sidebar.css'
import { HomeOutlined } from '@mui/icons-material'
const Sidebar = () => {
  return (
    <div className='sidebarWrapper'>
      <div className='sidebarWrapper-contents'>
      <div className='sidebarWrapper-content-1'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTND_EFKh9c47XeItrUh8GvR7TUaD1N66E3tw&usqp=CAU' alt='img' className='sidebarLogo'/>
      </div>
      </div>
      <div className='sidebarWrapper-content-2'>
        <HomeOutlined className='sidebarHome-icon' />
      </div>
    </div>
  )
}

export default Sidebar
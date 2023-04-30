import React from 'react'
import './Home.css'
import HomeHeader from './homeHeader/HomeHeader'
const Home = () => {
  return (
    <div className='homeWrapper'>
        <div className='homeWrapper-contents'>
            <HomeHeader />
        </div>
    </div>
  )
}

export default Home
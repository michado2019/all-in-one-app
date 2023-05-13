import React from 'react'
import './Header.css'
import { HomeOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className='header-wrapper'>
        <ul className='header-contents'>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTND_EFKh9c47XeItrUh8GvR7TUaD1N66E3tw&usqp=CAU"
            alt="img"
            className="logo"
          />
          <li className="headerLink-list">
        <Link to="/">
          <HomeOutlined className="home-icon" />
        </Link>
          </li>
          <li className="headerLink-list">
        <Link to="/project" className="home-icon" id='project'>
          Projects
        </Link>
          </li>
        </ul>
    </div>
  )
}

export default Header
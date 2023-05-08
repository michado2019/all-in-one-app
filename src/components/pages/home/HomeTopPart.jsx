import React from 'react'
import './HomeTopPart.css'
import { SearchOutlined } from '@mui/icons-material'
const HomeTopPart = ({handleNameSearch}) => {
    
  return (
    <div className='homeTopPart'>
        <div className="homeContent1">
            <form>
              <input
                type="text"
                placeholder="Search"
                className="homeSearch"
                onChange={handleNameSearch}
              />
              <SearchOutlined className="searchIcon" />
            </form>
          </div>
    </div>
  )
}

export default HomeTopPart
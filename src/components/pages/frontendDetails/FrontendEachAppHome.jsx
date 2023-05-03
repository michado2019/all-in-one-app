import React, {useState} from 'react'
import './FrontendEachAppHome.css'
import HomeHeader from '../home/homeHeader/HomeHeader'
import { Link, useParams } from 'react-router-dom'
import { fProjectData } from '../../ProjectData'
import { LinkOutlined } from '@mui/icons-material'
const FrontendEachAppHome = ({display, setDisplay, homeId, setHomeId}) => {

  //UseParams
  const {id} = useParams()
  //State
  const [displayTwo, setDisplayTwo] = useState(false)
  const [id2, setId2] = useState('')

  //Handlers
  const handleDisplay = (id) => {
    setDisplay(true);
    setHomeId(id);
    setId2(id);
    console.log(id);
  };
  const handleDisplayTwo = () => {
    if (id2 === homeId) setDisplayTwo((prev) => !prev);
  };
  return (
    <div className='frontendEachApp-home_wrapper'>
      <div className="homeContents">
        <div className="homeContent1">
          <HomeHeader />
        </div>
        <div className="frontendEachApp-home_Content2">
          {fProjectData.filter((each) => each.id==id).map((each, index) => {
            return (
              <div className="homeContent-div" key={each.id} 
              onMouseLeave={()=>setDisplay(false)}
              >
                <div 
              >
                  <h2 className="homeContent-div_title">{each.title}</h2>
                  <img
                    src={each.img}
                    alt="img"
                    className="homeProject-img"
                    onClick={() => handleDisplay(each.id)}
                  />
                </div>
                  <div
                    className="homeContent-div2"
                    onMouseLeave={() => setDisplay(false)}
                    onMouseEnter={() => setDisplay(true)}
                    onLoad={handleDisplayTwo}
                    style={ 
                        {marginTop: display? '-10px': '-70px', transition: 'all 0.5s'}
                    }
                  >
                    <div className="homeContent-div3" 
                    style={ 
                      {display: display? 'flex': 'none', transition: 'all 0.5s'}
                  }
              >
                      <h3 className="homeIndex">{index + 1}</h3>
                      <div className="homeContent-div4">
                        <ul className="homeContent-div4_grid1">
                          <li>{each.skills_required.skill_1}</li>
                          <li>{each.skills_required.skill_2}</li>
                          <li>{each.skills_required.skill_3}</li>
                          <li>{each.skills_required.skill_4}</li>
                        </ul>
                      </div>
                      <Link to={`/frontHome/${each.id}/weather`}>
                      <LinkOutlined className="homeContent-link" />
                      </Link>
                    </div>
                    <div className="homeContent-div5">
                      <p className="homeContent-div5_details">
                        {each.description}
                      </p>
                    </div>
                  </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default FrontendEachAppHome
import React from 'react'
import {BsSearch} from 'react-icons/bs'
import WhatsNew from '../../components/whatsNew/WhatsNew'

import Header from '../../components/header/Header'
import Calender from '../../components/calandar/Calender'
import RecruitmentProgress from '../../components/recruitmentProgress/RecruitmentProgress'
import HRProfile from '../../components/hrProfile/HRProfile'
const Home=()=>{
    return(
        <div className="home">
            <Header pageHeader="Dashboard"/>
            
          {/* <div className="header-container">
           <h2> Dashboard </h2>
          </div>
          <div className="action-container">
              <BsSearch/>
              <BiSend/>
              <IoNotificationsOutline/>
            </div> */}
            <div className="home-content">
            <div className="home-main-content">
            <WhatsNew/>
            <RecruitmentProgress/>
            </div>
            <div className="home-side-content">
                <Calender/>
                <HRProfile/>
            </div>
            </div>
            

        </div>    
        )
}
export default Home
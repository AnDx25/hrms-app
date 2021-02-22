import React from 'react'
import Avatar from '../avatar/Avatar'
import {IoCallOutline} from 'react-icons/io5'
import {GoMail} from 'react-icons/go'
import {BsThreeDots} from 'react-icons/bs'
const HRProfile=()=>{
    return(
        <div className="profile-card">
            <div className="profile-card-header">
                <Avatar/>
                <div className="name-designation">
                <p className="name">Anurag Dixit</p>
                <p className="designation">HR Manager</p>
                </div>
            </div>
            <div className="contact-options">
                <IoCallOutline className={"contact"}/>
                <GoMail className={"contact"}/>
                <BsThreeDots className={"contact"}/>
            </div>
            <hr/>
            <div className="hr-info">
                <div className="info">
                <label>Joined Date</label>
                <span>18-June-2020</span>
                </div>
                <div className="info">
                <label>Projects</label>
                <span>32 Active</span>
                </div>
                <div className="info">
                <label>Acomplishments</label>
                <span>125</span>
                </div>
            </div>
            <div className="view-more">
            <button className="view-more-btn">View More</button>
            </div>
            
        </div>
    )
}
export default HRProfile;
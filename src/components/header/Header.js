import React from 'react'
import Input from '../input/Input'
import {BsSearch} from 'react-icons/bs'
import {BiSend} from 'react-icons/bi'
import {IoNotificationsOutline} from 'react-icons/io5'
import Avatar from '../avatar/Avatar'
const Header=({pageHeader})=>{
    return(
        <div className="header">
            <div className="page-header">
                <div>
                    <h1 className="heading">{pageHeader}</h1>
                </div>
            </div>
            
            <div className="action-container">
                <Input icon={<BsSearch/>} classes={{inputComponentClassName:"hover-action"}}/>
                <BiSend className={"action-icon"}/>
                <IoNotificationsOutline className={"action-icon"}/>

            </div>
            <div className="profile-container">
                <label>Anurag Dixit</label>
                <Avatar/>
            </div>
            
        </div>
    )
}
export default Header
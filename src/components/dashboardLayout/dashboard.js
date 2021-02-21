import React from 'react'
import {VscHome} from 'react-icons/vsc'
import {MdPeopleOutline} from 'react-icons/md'
import {CgFileDocument} from 'react-icons/cg'
import {VscGraph} from 'react-icons/vsc'
import {FiSettings} from 'react-icons/fi'
import { Link } from 'react-router-dom'
const navLinks=[
    {
        name:"Dashboard",
        icon:<VscHome/>,
        link:"/"
    },
    {
        name:"Recuirtment",
        icon:<MdPeopleOutline/>,
        link:"/recuirtment"
    },
    {
        name:"Onboarding",
        icon:<CgFileDocument/>,
        link:"/onboarding"
    },
    {
        name:"Reports",
        icon:<VscGraph/>,
        link:"/reports"
    },
    {
        name:"Settings",
        icon:<FiSettings/>,
        link:"/settings"
    },
]
const DashboardLayout=({children})=>{
    console.log(children)
    return(
        <div className="dashboard-layout">
             <nav className="side-nav-bar">
                <div className="logo-container">
                    <h2>Newton HR</h2>
                </div>
                <div className="nav-container"> 
                    {
                        navLinks.map((navItem,index)=>(
                            <Link key={index} to={navItem.link}>
                            <div key={index} className="nav-item">
                                {navItem.icon}
                               <label key={index}className="item-name"> {navItem.name}</label>
                            </div>
                            </Link>

                        ))
                    }
                </div>
            </nav>
            <div className="main-container">
               
                {children}
            </div>   
           
        </div>
    )
}
export default DashboardLayout
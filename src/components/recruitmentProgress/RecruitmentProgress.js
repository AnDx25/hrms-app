import React,{useState} from 'react'
import CandidateProfile from '../candidateProfiles/CandidateProfile'
var recruitmentProfiles=[
    {
        fullName:"Mary G Loicus",
        designation:"Product Manager",
        status:"Practical Round",
        srcUrl:""
    },
    {
        fullName:"Vince Jacob",
        designation:"UI/UX Designer",
        status:"Practical Round",
        srcUrl:""
    },
    {
        fullName:"Jaidev Biswas",
        designation:"React Developer",
        status:"final Round",
        srcUrl:""
    },
    {
        fullName:"Jaidev Biswas",
        designation:"React Developer",
        status:"final Round",
        srcUrl:""
    },{
        fullName:"Jaidev Biswas",
        designation:"React Developer",
        status:"final Round",
        srcUrl:""
    },
    {
        fullName:"Jaidev Biswas",
        designation:"React Developer",
        status:"final Round",
        srcUrl:""
    },
    {
        fullName:"Jaidev Biswas",
        designation:"React Developer",
        status:"final Round",
        srcUrl:""
    },

    
    


]
const displayedPost=0;
const RecruitmentProgress=()=>{
    const [scrollable,setScroll]=useState(false)
    return(
        <div className="recruitment-progress-container" id="recruitment-progress-container">
            
            <div className="recruitment-progress-header">
                <h3 className="header-name">Recruitment Progress</h3>
                {
                    scrollable?<button className="header-button" id="header-button-view-less" onClick={()=>{
                        document.getElementById("recruitment-progress-container").style.overflow="hidden"
                        
                        setScroll(!scrollable)}}>View Less</button>:<button className="header-button" id="header-button-view-more" onClick={()=>{
                            document.getElementById("recruitment-progress-container").style.overflow="auto"
                            
                            setScroll(!scrollable)}}>View All</button>
                }
                

            </div>
            <hr/>
            <div className="recruitment-progress-body">
            <label className="full-name">Full Name</label>
            <label className="designation">Designation</label>
            <label className="status">Status</label>
            </div>
            <hr/>
            {
              
                recruitmentProfiles.map((profiles,index)=>{
                    if(!scrollable)
                    {
                    if(index<3)
                    {
                   return(
                       <div key={index}>
                       <CandidateProfile 
                       srcUrl={profiles.srcUrl}
                       fullName={profiles.fullName}
                       designation={profiles.designation}
                       status={profiles.status}
                       />
                       <hr/>
                       </div>
                       
                   )
                   displayedPost+=1;
                    }
                }
                else
                {
                    return(
                        <div key={index}>
                        <CandidateProfile 
                        srcUrl={profiles.srcUrl}
                        fullName={profiles.fullName}
                        designation={profiles.designation}
                        status={profiles.status}
                        />
                        <hr/>
                        </div>
                        
                    )
                    setScroll(false)
                }
                })
            }
            <div className="recruitment-progress-footer">
                <span id="footer1">Showing 3 out of 3 results</span>
                {
                    scrollable?<a id="footer2" href="#" onClick={()=>{
                        document.getElementById("recruitment-progress-container").style.overflow="hidden"
                        
                        setScroll(!scrollable)}}>View Less</a>:<a id="footer2" href="#" onClick={()=>{
                            document.getElementById("recruitment-progress-container").style.overflow="auto"
                            
                            setScroll(!scrollable)}}>View All</a>
                }
                
            </div>
        </div>
    )
}
export default RecruitmentProgress
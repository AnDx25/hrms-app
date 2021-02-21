import React from 'react'
import CandidateProfile from '../candidateProfiles/CandidateProfile'
var recruitmentProfiles=[
    {
        fullName:"Mary G Loicus",
        designation:"Product Manager",
        status:"Practical Round",
        srcUrl:""
    },
    {
        fullName:"Mary G Loicus",
        designation:"Product Manager",
        status:"Practical Round",
        srcUrl:""
    },
    {
        fullName:"Mary G Loicus",
        designation:"Product Manager",
        status:"Practical Round",
        srcUrl:""
    }

]

const RecruitmentProgress=()=>{
    return(
        <div className="recruitment-progress-container">
            <div className="recruitment-progress-header">
                <h3 className="header-name">Recruitment Progress</h3>
                <button className="header-button">View All</button>
            </div>
            <hr/>
            <div className="recruitment-progress-body">
            <label className="full-name">Full Name</label>
            <label className="designation">Designation</label>
            <label className="status">Status</label>
            </div>
            {
                recruitmentProfiles.map((profiles)=>{
                   return(
                       <div>
                       <CandidateProfile 
                       srcUrl={profiles.srcUrl}
                       fullName={profiles.fullName}
                       designation={profiles.designation}
                       status={profiles.status}

                       />
                       <hr/>
                       </div>
                       
                   )
                })
            }
            <div className="recruitment-progress-footer">
                <span id="footer1">Showing 3 out of 3 results</span>
                <a id="footer2" href="#">View All</a>
            </div>
        </div>
    )
}
export default RecruitmentProgress
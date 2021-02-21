import React from 'react'
import Avatar from '../avatar/Avatar'
const CandidateProfile=({srcUrl,fullName,designation,status})=>{
    return(
        <div className="candidate-profiles">
            <div className="candidate">
            <Avatar/>
            {fullName}
            </div>
            <div className="designation">
                {designation}
            </div>
            <div className="status">
                {status}
            </div>
           
        </div>
    )
}
export default CandidateProfile
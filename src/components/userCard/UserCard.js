import { ref } from "yup";
import React from 'react'
import { Draggable } from "react-beautiful-dnd";
import { Avatar } from "@material-ui/core";

const UserCard=({key, draggableId, index,name="Anurag Dixit",designation="Full Stack Developer",joiningDate="8218"})=>{
    return(
        <Draggable key={key} index={index} draggableId={draggableId} >
            {
                (provided,snapshot)=>
                (
                    <div className="user-card"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                       <Avatar/>
                        <div className="user-details">
                            <label>{name}</label>
                            <p>{designation}</p>
                            <p>{joiningDate}</p>
    
                        </div> 
                    </div>
                )
            }
           
        </Draggable>
    )
    
}
export default UserCard;
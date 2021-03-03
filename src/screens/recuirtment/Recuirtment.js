import React, { useState } from 'react'
import authenticate from '../../hoc/authenticate'

import {DragDropContext, Droppable} from 'react-beautiful-dnd'
import UserCard from '../../components/userCard/UserCard'
const userData=[
    {
        name:"Anurag Dixit"
    },
    {
        name:"Raja Kumar"
    },
    {
        name:"Ranvijay Singh"
    },
    {
        name:"Tushar Shukla"
    },
    {
        name:"Ravi Rajasva"
    },

]
const Recuirtment=()=>{
    const [allCandidates,setAllCandidates]=useState(userData);
    const [selectedCandidates,setSelecetdCandidates]=useState([]);

    const onDragEnd=({source,destination})=>{
        if(destination===null) return;
        let sourceArr;
        let destinationArr;

        if(source.droppableId==="UNSELECTED" && destination.droppableId==="SELECTED")
        {
            sourceArr=[...allCandidates];
            destinationArr=[...selectedCandidates]
            
            const removed=sourceArr.splice(source.index,1);
            destinationArr.splice(destination.index,0,removed)
            setAllCandidates(sourceArr)
            setSelecetdCandidates(destinationArr)
           
        }
        else if(source.droppableId==="SELECTED" && destination.droppableId==="UNSELECTED")
        {
            sourceArr=[...selectedCandidates];
            destinationArr=[...allCandidates]

            const removed=sourceArr.splice(source.index,1);
            destinationArr.splice(destination.index,0,removed)
            setSelecetdCandidates(sourceArr);
            setAllCandidates(destinationArr);
        }
       
       
    }
    return(
        <div className="recruitment">
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="UNSELECTED">
                {(provided, snapshot) => (
                <div
                className="droppable-container"
                id="unselected-container"
              {...provided.droppableProps}
              ref={provided.innerRef}
              
            > 
            
                <h4 style={{textAlign:"center"}}>All Candidates</h4>
               {
                   allCandidates.map((candidate,index)=>(
                       <UserCard name={candidate.name} key={index} draggableId={`abc_${index}`} index={index}/>
                   )) 
               }
               {provided.placeholder}
               
            </div>)}
           
                </Droppable>

                <Droppable droppableId="SELECTED">
                {(provided, snapshot) => (
                <div
                className="droppable-container"
                id="selected-container"
              {...provided.droppableProps}
              ref={provided.innerRef}
             
            > 
            <h4 style={{textAlign:"center"}}>Selected Candidates</h4>
            
            {
                
                   selectedCandidates.map((candidate,index)=>(
                       
                       <UserCard name={candidate.name} key={index} draggableId={`def_${index}`} index={index}/>
                   )
                   ) 
            }
           
            {provided.placeholder}
            </div>)}
            
                </Droppable>
           
            </DragDropContext>
            
        </div>    
        )
}
export default authenticate(Recuirtment)
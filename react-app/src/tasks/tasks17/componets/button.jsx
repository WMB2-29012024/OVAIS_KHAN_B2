import React,{useEffect} from "react";

const TaskCard = () => {

useEffect(()=>{
    console.log('clicked')
});

const handleClick = () => {
    console.log('button clicked')
}
return(
    <div>
    <button onClick={handleClick}>button</button>
    </div>
);
}

export default TaskCard;
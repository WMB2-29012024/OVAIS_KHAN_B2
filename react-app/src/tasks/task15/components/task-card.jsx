import React,{useEffect, useState} from "react";

const TaskCard = () => {
const [toggle, setToggle] = useState(false);
const [count, setCount] = useState(0);

useEffect(()=>{
    console.log("bina array k",{count})
});
useEffect(()=>{
    console.log("empty array k",{count})
},[]);
useEffect(()=>{
    console.log('run when "count" change',{count})
},[count]);

useEffect(()=>{
    console.log('run when "toggle" change',{toggle})
},[toggle]);

return(
    <>
    <button onClick={()=> setCount(count+1)}>+{count}</button>
    <div>{count}</div>
    <button onClick={()=> setCount(count-1)}>-{count}</button>
    <button onClick={()=> setToggle(toggle)}>-{!toggle}</button>
    </>
);
}

export default TaskCard;
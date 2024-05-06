import React,{useEffect, useState} from "react";

const TaskCard = () => {
const [toggle, setToggle] = useState(false);
const [count, setCount] = useState(0);

useEffect(()=>{
  setCount(count+1);
},[toggle]);

return(
    <div>
    <button onClick={()=>setToggle(!toggle)}>button</button>
    <div>{count}</div>
    <button onClick={()=>setToggle(!toggle)}>button</button>
    </div>
);
}

export default TaskCard;
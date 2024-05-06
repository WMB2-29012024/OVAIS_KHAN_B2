import { useState } from "react";
const Count = ()=> {
    const [count, setCount] =useState(0);
    const CountIncrease = () =>{
       setCount(count+1)
    }

    const CountDecrease = () =>{
        setCount(count-1) 
    }
    return(
    <div>
        <button onClick={CountIncrease}>Increase</button>
        <div><h1>{count}</h1></div>
        <button onClick={CountDecrease}>Decrease</button>
        </div>
    );
}
export default Count;
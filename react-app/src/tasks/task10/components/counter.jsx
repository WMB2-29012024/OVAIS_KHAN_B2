import React,{useState} from "react";

let count = 0;

const Counter = () => {
const [toggle, setToggle] = useState(0);

const IncreaseCount = () => {
    count++
    setToggle(toggle + 1);
}

return(
    <button onClick={IncreaseCount}>Click !{count}</button>
);
}

export default Counter;

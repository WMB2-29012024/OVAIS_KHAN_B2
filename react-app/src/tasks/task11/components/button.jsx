import { useState } from "react";

const Button = () => {
    const [count, setCount ] = useState(0);
    

const CountIncresase = () => {
    setCount(count+1)
}
const CountDecresase = () => {
    setCount(count-1)
}
return(
  
    <>
    <div>{count}</div>
    <button onClick = {CountIncresase} >Increase</button>
    <button onClick={CountDecresase}>Decrease</button>
    </>
)
}
export default Button;
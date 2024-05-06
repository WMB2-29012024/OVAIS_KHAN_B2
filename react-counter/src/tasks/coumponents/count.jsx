import { useState } from "react";

const Count = ()=> {
    const [count, setCount] =useState(0);

    const CountIncrease = () =>{
       setCount(count+1)
    }

    return(
        <button style={{ fontSize: '2em', color: 'white',backgroundColor: 'grey' }} onClick={CountIncrease}>Click me - {count}</button>
    );
}
export default Count;
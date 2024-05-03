import { useRef } from "react";

const Task14 = () => {
  const boxRef = useRef();

  const handleInput = () => {
    boxRef.current.style.display = 'none';
  }

  return (
    <div>
      <div ref={boxRef} style={{width:'100px',height:'100px', backgroundColor:'red'}}></div>
      <button type="text" onClick={handleInput}>Hide Button !</button>
    </div>
  );
};
export default Task14;

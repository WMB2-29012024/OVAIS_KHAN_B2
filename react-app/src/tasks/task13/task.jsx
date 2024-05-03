import { useRef } from "react";

const Task13 = () => {
  const inputRef = useRef();

  const handleInput = () => {
    console.log(inputRef.current.value);
  };

  return (
    <div>
      <input ref={inputRef} type="text" onChange={handleInput} />
    </div>
  );
};
export default Task13;

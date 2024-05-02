import CountComponet from "./components/count";
import Buttons from "./components/Buttons";
import {useState} from "react";

function App() {
  const [count , setCount] = useState(0);
  return (
    <div>
   <CountComponet countNumber={count}/>
   <Buttons setCount={setCount}/>
    </div>
  );
}




export default App;

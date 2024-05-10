import { useState } from "react";
import "./App.css";
import ListComponents from "./components/listComponents";

function App() {
  const [list, setList] = useState([]);

  const clickComponent = () => {
    list.push(1);
    setList([...list]);
  };

  return (
    <div className="App">
      {list.map(() => (
        <ListComponents />
      ))}

      <button onClick={clickComponent}>click</button>
    </div>
  );
}

export default App;

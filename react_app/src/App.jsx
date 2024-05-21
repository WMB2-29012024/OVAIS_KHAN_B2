import { useState } from "react";
import "./App.css";
import Table from "./components/table";
import Tableheader from "./components/tableheader";

function App() {
  const [data, setData] = useState([]);

  async function GetApi() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const user = await response.json();
    setData(user);
  }
  GetApi();
 
  return (
    <div className="App">
      <table>
       <Tableheader/>
      <Table data={data}/>
      </table>
    </div>
  );
}

export default App;

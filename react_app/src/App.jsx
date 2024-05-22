import { useState ,useEffect } from "react";
import "./App.css";
import Table from "./components/table";
import Tableheader from "./components/tableheader";


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await response.json();
      setData(users);
    };
    fetchData();
  }, []);
 


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

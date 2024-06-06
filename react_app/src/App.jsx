import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Table from "./components/table";
import Tableheader from "./components/tableheader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import UserForm from "./components/editComponent";

export const PropContext = React.createContext();
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await response.json();
      setData(users);
    };
    fetchData();
  }, []);

  return (
    <Router>
      <PropContext.Provider value={{ setData }}>
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={
                <table>
                  <Tableheader />
                  <Table data={data} setData={setData} />
                </table>
              }
            ></Route>
            <Route path="/edit" element={<UserForm setData={setData} data={data}/> }></Route>
          </Routes>
        </div>
      </PropContext.Provider>
    </Router>
  );
}

export default App;

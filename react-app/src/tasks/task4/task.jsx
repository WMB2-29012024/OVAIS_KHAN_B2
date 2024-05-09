import { useState } from "react";
import Form from "./components/form";
import Data from "./components/data";

const Task4 = () => {
  const [todoData, setTodoData] = useState({})
  return (
    <div>
      <Form setTodoData={setTodoData} />
      <Data todoData={todoData} />
    </div>
  );
};
export default Task4;

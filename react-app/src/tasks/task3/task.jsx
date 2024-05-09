import { useState } from "react";

const Task2 = () => {
  const [TodoData, setTodoData] = useState([]);

  const Clickfunc = () => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      setTodoData(data);
    };
    fetchData();
    console.log(TodoData);

  return (
    <div>
      <button onClick={Clickfunc}>click</button>
      <ol>
        {TodoData.map((elem) => {
          return <li>{elem.title}</li>;
        })}
      </ol>
    </div>
  );
};
};

export default Task2;

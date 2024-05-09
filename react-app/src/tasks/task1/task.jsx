import { useEffect } from "react";

const Task = () => {

    useEffect(() => {
        (async () => {
        const response = await fetch(
"https://jsonplaceholder.typicode.com/todos"
        );
        const data = await response.json();
        console.log(data);
    })();

    },[]);


  useEffect(() => {
    const fetchTodoData = async () => {
        const response = await fetch(
"https://jsonplaceholder.typicode.com/todos"
        );
        const data = await response.json();
        console.log(data);
    };
    fetchTodoData();

    fetch ("https://jsonplaceholder.typicode.com/todos")
    .then((response)=> response.json())
    .then((data)=>console.log(data));
  },[]);
  
  return (
  <div>Hello World</div>
);
}
export default Task;

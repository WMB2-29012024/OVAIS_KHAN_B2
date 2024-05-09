import { useEffect ,useState} from "react";

const Task1 = () => {
    const [TodoData ,setTodoData] = useState([]);

useEffect (()=>{
const fetchData = async () =>{
    const response = await fetch ("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    setTodoData(data);
};
fetchData();
},[]);
console.log(TodoData);

return(
    <div>
    <ol>
{TodoData.map((elem)=>{
return <li>{elem.title}</li>
})}
    </ol>
    </div>
);

};
export default Task1;
import CardComponents from "./components/cardList";

const Task = () =>{
    const componentArray = [1];
    return(
        <div id="cardBox">

       {componentArray.map(
        (element)=> {
        return <CardComponents element ={element}/>
       }
    )
       }

        </div>
    )
}
export default Task;
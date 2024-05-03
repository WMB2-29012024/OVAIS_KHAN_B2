import Button from "./componets/buttons";

const Task7 = () =>{
    const handleButtonClicked = () => {
        alert("Button Clickedd!");
    }
    return(
     <div>
        <Button btnClick={handleButtonClicked}/>
        <Button btnClick={() => alert ('second button clicked')}/>
     </div>
    )
}
export default Task7;
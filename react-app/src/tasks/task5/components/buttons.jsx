
const Button = () =>{
    const handleButtonClick = () => {
        alert("Button Clickedd!");
    }
 const handleRightClick = () => {
    alert("Button Right Button Clickedd!");
 }

    return <button style={{padding :'10px 20px', margin:'10px'}}onClick={handleButtonClick}
    onContextMenu={handleRightClick}
    
    >Clickme!</button>;
};
export default Button ;
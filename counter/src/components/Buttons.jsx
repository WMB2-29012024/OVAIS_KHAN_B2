const Buttons =({setCount}) => {
    const handleCountDecreace = () =>{
        setCount((currentValue) => currentValue !==0 ?currentValue - 1 : 0);
    };
    const handleCountIncreace = () =>{
        setCount((currentValue) => currentValue + 1);
    };

    return(
    <div>
        <button onClick={handleCountDecreace}>Decrease</button>
        <button onClick={handleCountIncreace}>Increase</button>
    </div>
    )
}

export default Buttons;
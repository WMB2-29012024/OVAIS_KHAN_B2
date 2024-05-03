const Input = () => {
  const handleButtonChange = (e) => {
    const valuetrue = e.target.value;
    console.log(valuetrue);
    
  };

  return (
    <div>
      <input
        type="text"
   
        placeholder="Enter Text"
        onChange={handleButtonChange}

      />
      {/* <div>{valuetrue}</div> */}
      
    </div>
  );
};
export default Input;

const FormComponent = (inputElem) => {

    const handleSubmit = (e) =>{
        console.log(e.target.input.value);
    }
  
  return (
    <div>
     <form onSubmit={handleSubmit}>
        <input id="input" type="text" />
     </form>
    </div>
  );
};

export default FormComponent;

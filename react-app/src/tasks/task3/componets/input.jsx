const InputItem = ({placeholder , inputid ,type }) =>{
 
    return(
    <div className="input-box">
        <label htmlFor="{inputid}">{placeholder}</label>
      <input type={type} id={inputid} placeholder={placeholder}></input>
      </div>
    )
}
export default InputItem;
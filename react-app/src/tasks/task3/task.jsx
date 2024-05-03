import InputItem from "./componets/input";

const Task3 = () =>{
    return(
        <div>
            <InputItem placeholder="Enter your Name" type="text" inputid="name-input"/>
            <InputItem placeholder="Enter your Age" type="Number" inputid="age-input"/>
            <InputItem placeholder="Enter your Email" type="email" inputid="email-input"/>
        </div>
    )
}
export default Task3;
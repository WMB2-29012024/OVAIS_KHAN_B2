import React, { useState } from 'react';
import DeleteUserModal from './deletePopup';

const Delete = ({data,idx}) => {
    const [style ,setStyle] = useState("none")

    const tableDeleteBtn =() => {
        if(style === "none"){
            setStyle("block");
           }else{
            setStyle("none")
           }
    }
  return (
    <div onClick={tableDeleteBtn}><img src="./images/trash-2 2.svg" alt="/"/>
    <DeleteUserModal setStyle={setStyle} style={style} data={data} idx={idx}/>
    </div>
  )
}
export default Delete ;
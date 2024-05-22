import React from 'react'

const Edit = () => {
   
    const editBtnClicked = () =>{

       console.log("edit btn clicked")
    }
  return (
    <div onClick={editBtnClicked}><img src="./images/Frame 14.svg" alt="" /></div>
  )
}
export default Edit;
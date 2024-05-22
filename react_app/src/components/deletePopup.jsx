import "./deletePopup.css";
import { useState } from "react";

const DeleteUserModal = ({ setStyle, style, idx, data }) => {
  // const [selectedIdx, setSelectedIdx] = useState(null);
  // const [newdata , setNewData] =useState(data)

  // const openModal = (idx) => {
  //   setSelectedIdx(idx);
  //   setStyle("block");
  // };

  const closeModal = () => {
    setStyle("none");
  };

  // const onClose = () => {
  //   if (style === "none") {
  //     setStyle("block");
  //   }
  const onDelete = () => {

      updatedData.splice(1, 1);
      console.log(newdata)
      
  
  };


  return (
    <div className="modal" style={{ display: style }}>
      <div className="icon">
        <img src="./images/trash-2 2.svg" alt="Delete Icon" />
        <button className="close-btn">
          ╳
        </button>
      </div>
      <h2>Delete User?</h2>
      <p>
        Are you sure you want to delete this user? This action cannot be undone.
      </p>
      <div className="buttons">
        <button className="delete-btn" onClick={onDelete}>
          Delete
        </button>
        <button className="cancel-btn" >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteUserModal;

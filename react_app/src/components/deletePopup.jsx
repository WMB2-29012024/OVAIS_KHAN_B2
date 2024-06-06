import "./deletePopup.css";
import { useContext } from "react";
import { PropContext } from "../App";

const DeleteUserModal = ({ setStyle, style, idx, data }) => {
  const { setData } = useContext(PropContext);

  const onDelete = () => {
    const updatedData = data.filter((_, index) => index !== idx);
    setData(updatedData);
    setStyle("none");
  };

  const onClose = () => {
    setStyle("none");
  };

  return (
    <div className="modal" style={{ display: style }}>
      <div className="icon">
        <img src="./images/trash-2 2.svg" alt="Delete Icon" />
        <button className="close-btn" onClick={onClose}>╳</button>
      </div>
      <h2>Delete User?</h2>
      <p>
        Are you sure you want to delete this user? This action cannot be undone.
      </p>
      <div className="buttons">
        <button className="delete-btn" onClick={onDelete}>
          Delete
        </button>
        <button className="cancel-btn" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteUserModal;

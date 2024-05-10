import React from "react";

const CardDetail = ({ ID, deleteBtn }) => {
  const deleteHandler = () => {
    deleteBtn(ID);
  };

  return (
    <div className="listComp">
      <button onClick={deleteHandler}>x</button>
      <h1>List Component</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quo sapiente minima
        sequi ducimus, perspiciatis optio necessitatibus, perferendis blanditiis quos eveniet sunt
        odio suscipit amet veritatis consequuntur harum quaerat aliquid? Ut, ratione.
      </p>
    </div>
  );
};

export default CardDetail;

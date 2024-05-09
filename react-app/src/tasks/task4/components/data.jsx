const Data = ({ todoData }) => {
  return (
    <div>
      <h2>Todo Data:</h2>
      {todoData.title ? (
        <>
          <p>ID:{todoData.id}</p>
          <p>TITLE:{todoData.title}</p>
          <p>STATUS:{String(todoData.completed)}</p>
        </>
      ) : (
        <p>No Data Found</p>
      )}
    </div>
  );
};
export default Data;

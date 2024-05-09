const Form = ({ setTodoData }) => {

    const fetchData = async (e) => {

        e.preventDefault();
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/todos/${e.target.input.value}`
        );
        const data = await response.json();
        setTodoData(data);
};

return (
    <form onSubmit={fetchData} >
        <input
        id="input"
            type="number"
        />
        <button type="submit">click!</button>
    </form>
);
};
export default Form;

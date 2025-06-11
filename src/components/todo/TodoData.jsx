
const TodoData = (props) => {

    // const { name, age, data } = props;
    const { todoList } = props;
    console.log("Check props: ", props);

    return (
        <div className='todo-data1'>
            {todoList.map((item, index) => {
                return (<div className="todo-item">
                    <div>{item.name}</div>
                    <button className="1">delete</button>
                </div>)
            })}

            <div>
                {JSON.stringify(props.todoList)}
            </div>
        </div>
    )
}
export default TodoData;

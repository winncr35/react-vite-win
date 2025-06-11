
const TodoData = (props) => {

    // const { name, age, data } = props;
    const { todoList, deleteTodo } = props;
    const handleClick = (id) => {
        deleteTodo(id)

    }

    return (
        <div className='todo-data1'>
            {todoList.map((item, index) => {
                return (
                    <div className={`todo-item`} key={item.id}>
                        <div>{item.name}</div>
                        <button style={{ cursor: "pointer" }}
                            onClick={() => { handleClick(item.id) }}>delete</button>
                    </div>)
            })}


        </div>
    )
}
export default TodoData;

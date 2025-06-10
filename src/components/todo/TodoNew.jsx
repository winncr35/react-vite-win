const TodoNew = (props) => {

    console.log("Check :", props)
    const { addNewTodo } = props;
    // addNewTodo("win");
    return (
        <div className='todo-new'>
            <input type="text" />
            <button>Add</button>
        </div>
    )
}
export default TodoNew;
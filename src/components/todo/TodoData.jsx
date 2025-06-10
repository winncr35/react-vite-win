
const TodoData = (props) => {
    // props là một object{}
    // {
    //     name :"win",
    //     age: 25,
    //     data:{}
    // }
    // objec destructoring
    //  lấy key của object props ra xài
    const { name, age, data } = props;
    console.log("Check props: ", props);

    return (
        <div className='todo-data1'>
            <div>My name is {name}</div>
            <div> Learning React</div>
            <div> Watching Youtube</div>
            <div>
                {JSON.stringify(props.todoList)}
            </div>
        </div>
    )
}
export default TodoData;

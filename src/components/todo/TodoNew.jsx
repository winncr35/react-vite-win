import { useState } from "react";

const TodoNew = (props) => {
    // useState hook
    // const valueInput = "";
    const [valueInput, setValueInput] = useState("win")
    const { addNewTodo } = props;
    // addNewTodo("win");
    const handleClick = () => {
        addNewTodo(valueInput)
        setValueInput(""); // trả ô input rỗng sau khi add
    }

    const handleOnChange = (name) => {
        setValueInput(name)
    }
    return (
        <div className='todo-new'>
            <input type="text"
                onChange={(event) => { handleOnChange(event.target.value) }} //lấy giá trị trong ô input
                value={valueInput}
            />
            <button style={{ cursor: "pointer" }}
                onClick={handleClick}
            >Add</button>
            <div>
                My text input is = {valueInput}
            </div>


        </div>
    )
}
export default TodoNew;
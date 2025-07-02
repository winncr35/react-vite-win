import './todo.css';
import TodoData from './TodoData';
import TodoNew from './TodoNew';
import reactLogo from '../../assets/react.svg';
import { useState } from 'react';



const TodoApp = () => {
    const [todoList, setTodoList] = useState([
        // { id: 1, name: "Learning React" },
        // { id: 2, name: "Watching Youtube" }
    ])

    const addNewTodo = (name) => {
        const newTodo = {
            id: randomIntFromInterval(1, 1000000),
            name: name
        }

        setTodoList([...todoList, newTodo])
    }
    const deleteTodo = (id) => {
        const newTodo = todoList.filter((item) => item.id !== id)
        setTodoList(newTodo)
    }

    const randomIntFromInterval = (min, max) => { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    return (
        <div className="todo-container">
            <div className="todo-title">Todo List</div>
            <TodoNew
                addNewTodo={addNewTodo}

            />

            {todoList.length > 0 ?
                <TodoData
                    deleteTodo={deleteTodo}
                    todoList={todoList}
                />

                :     // dùng toán tử 3 ngôi (ternary operator)

                <div className="todo-image">
                    <img src={reactLogo} className='logo' />
                </div>
            }


            {/* {todoList.length > 0 && // chỉ được sử dụng 1 khối và nên dùng fragment
        <>
          <TodoData
            todoList={todoList}
          />
        </>
      }
      {todoList.length === 0 &&
        <div className="todo-image">
          <img src={reactLogo} className='logo' />
        </div>
      } */}


        </div>
    )
}

export default TodoApp;
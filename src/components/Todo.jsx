import { useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";

function Todo() {
    const [todoList, setTodoList] = useState([]);
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("#448aff");

    const handleTodo = (todo) => {
        setTodoList([...todoList, todo]);
        setCount(count + 1);
    }

    const completed = (id) => {
        const updatedList = todoList.map((e) => {
            if (e.id === id) {
                if (e.status === false) {
                    setCount(count - 1);
                    e.status = true;
                } else {
                    setCount(count + 1);
                    e.status = false;
                }
                e.status ? setColor("green") : setColor("#448aff")
            }
            return e;
        } );
        setTodoList(updatedList);
    }

    const deleted = (id) => {
        const listAfterDelete = todoList.filter((e) => e.id !== id);
        setTodoList(listAfterDelete);
    }

    const toggle = () => {
        const toggledData = todoList.map((e) => {
            if (e.status === true) {
                e.status = false;
            } else {
                e.status = true;
            }
            return e;
        })
        setTodoList(toggledData);
    }

    const styles = {
        color: "white"
    }

    return <div>
        <h1 style={styles}>To Do App | Total Tasks = {count}</h1>
        <TodoInput addTodo={handleTodo} handleToggle={toggle}></TodoInput>
        <TodoList changeColor={color} list={todoList} markDone={completed} deleteTask={deleted}></TodoList>
    </div>
}
    
export { Todo };
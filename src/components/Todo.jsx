import { useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";

function Todo() {
    const [todoList, setTodoList] = useState([]);

    const handleTodo = (todo) => {
        setTodoList([...todoList, todo]);
    }

    const completed = (id) => {
        const updatedList = todoList.map((e) => {
            if (e.id === id) {
                e.status = true;
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

    return <div>
        <TodoInput addTodo={handleTodo} handleToggle={toggle}></TodoInput>
        <TodoList list={todoList} markDone={completed} deleteTask={deleted}></TodoList>
    </div>
}

export { Todo };
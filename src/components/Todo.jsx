import { useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";

function Todo() {
    const [todoList, setTodoList] = useState([]);

    const handleTodo = (todo) => {
        setTodoList([...todoList, todo]);
    }

    return <div>
        <TodoInput addTodo={handleTodo}></TodoInput>
        <TodoList list={todoList}></TodoList>
    </div>
}

export { Todo };
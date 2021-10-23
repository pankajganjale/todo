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


    return <div>
        <TodoInput addTodo={handleTodo}></TodoInput>
        <TodoList list={todoList} markDone={completed}></TodoList>
    </div>
}

export { Todo };
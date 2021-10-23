import { useState } from "react";

import { nanoid } from 'nanoid';

function TodoInput({addTodo, handleToggle}) {
    const [text, setText] = useState({
        task: "",
        date: "",
    });

    const newTask = (e) => {
        const { name, value } = e.target;
        setText({
            ...text,
            [name]: value
        })
    }

    const handleChange = () => {
        const data = {
            title: text.task,
            date: text.date,
            status: false,
            id: nanoid(5)
        }
        addTodo(data);
    }

    return <div>
        <input name="task" type="text" placeholder="Enter Task.." onChange={newTask} />
        <input name="date" type="date" onChange={newTask} />
        <button onClick={handleChange}>ADD TASK</button>
        <button onClick={handleToggle}>TOGGLE</button>
    </div>
}

export { TodoInput };
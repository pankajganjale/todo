import { useState } from "react";

import { nanoid } from 'nanoid';

import "./todoInput.css";

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
        setText({
            task: "",
            date: ""
        })
    }

    return <div className="input">
        <input value={text.task} name="task" type="text" placeholder="Enter Task.." onChange={newTask} />
        <input value={text.date} name="date" type="date" onChange={newTask} />
        <button onClick={handleChange}>ADD TASK</button>
        <button onClick={handleToggle}>TOGGLE</button>
    </div>
}

export { TodoInput };
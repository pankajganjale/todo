import "./todoList.css";

function TodoList({list, markDone, deleteTask}) {
    return <div className="mainTask">
        <div><p>TASK</p><p>DEADLINE</p><p>STATUS</p><p>MARK</p><p>DELETE</p></div>
        {list.map((e) => <div key={e.id}><p>{e.title}</p><p>{e.date}</p><p>{e.status ? "Completed" : "Not Completed"}</p><button onClick={() => {
            markDone(e.id);
        }} >Done</button><button onClick={() => {
            deleteTask(e.id);
        }}>Delete</button></div>)}
    </div>
}

export { TodoList };
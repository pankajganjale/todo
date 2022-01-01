import "./todoList.css";

function TodoList({ list, markDone, deleteTask, changeColor }) {
    const styles = {
        backgroundColor: changeColor
    }
    return <div className="mainTask">
        <div><p>TASK</p><p>DEADLINE</p><p>STATUS</p><p>MARK</p><p>DELETE</p></div>
        {list.map((e) => <div key={e.id}><p style={e.status ? {textDecoration: "line-through" } : {textDecoration: "none"}}
        >{e.title}</p><p>{e.date}</p><p>{e.status ? "Completed" : "Not Completed"}</p><button style={e.status?{backgroundColor:"#2fb61d"}:{backgroundColor:"#448aff"}
    } onClick={() => {
            markDone(e.id);
        }} >Done</button><button onClick={() => {
            deleteTask(e.id);
        }}>Delete</button></div>)}
    </div>
}

export { TodoList };
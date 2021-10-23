function TodoList({list, markDone}) {

    return <div>
        {list.map((e) => <div key={e.id}><p>{e.title}</p><p>{e.date}</p><p>{e.status ? "Completed" : "Not Completed"}</p><button onClick={() => {
            markDone(e.id);
        }} >Mark Completed</button><button>Delete</button></div>)}
    </div>
}

export { TodoList };
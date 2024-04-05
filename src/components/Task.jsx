function Task({tasks, handleChange, deleteTask}){
    return(
        <>
        <ul>
        {tasks.map(task => 
            <li key= {task.id} className = 'task'  style = {{textDecoration: task.completed ? 'line-through' : 'none'}}>
                <p onClick = {() => handleChange(task.id)}>{task.text}</p>
                <button onClick={()=>{deleteTask(task.id)}}>Eliminar</button>
            </li>
        )}
        </ul>
        </>
    )
}

export default Task;
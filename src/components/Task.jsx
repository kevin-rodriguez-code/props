function Task({tasks, handleChange}){
    return(
        <>
        <ul>
        {tasks.map(task => 
            <li key= {task.id} className = 'task' onClick = {() => handleChange(task.id)} style = {{textDecoration: task.completed ? 'line-through' : 'none'}}>
                <p>{task.text}</p>
            </li>
        )}
        </ul>
        </>
    )
}

export default Task;
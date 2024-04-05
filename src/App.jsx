import './App.css'
import { useState } from 'react';
import Task from './components/Task';
import AddTaskForm from './components/AddTaskForm';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);

  function handleClick(id){
    const updatedTasks = () => tasks.map(task =>{
      if(task.id === id){
        return{...task, completed: !task.completed}
      }
        return task})
    

    setTasks(updatedTasks)
  
  }

  function addTask(text) {
    const newTask = {id:tasks.length +1, text, completed:false}
    setTasks([...tasks, newTask])
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  return (
    <>
    <h1>Lista de Tareas</h1>
    <AddTaskForm addTask = {addTask}/>
    <Task tasks = {tasks} handleChange = {handleClick} deleteTask={deleteTask}/>
    
    </>
  );
};

export default App;

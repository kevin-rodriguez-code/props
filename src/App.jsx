import './App.css'
import { useState } from 'react';
import Task from './components/Task';

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

  return (
    <>
    <Task tasks = {tasks} handleChange = {handleClick}/>
    
    </>
  );
};

export default App;

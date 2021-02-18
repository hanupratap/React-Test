import './App.css';
import {useState} from 'react'
import Header from './components/Header';
import React from 'react'
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { FaLess } from 'react-icons/fa';

function App() {

  const [showAddTask, setShowAddTask] = useState(FaLess)


  const [tasks, setTasks] = useState([
    {
        id:1,
        title:"test",
        reminder:false
    },
    {
        id:2,
        title:"test two",
        reminder:false
    },
    {
      id:3,
      title:"test three",
      reminder:false
  },
])

// Add task
const addTask = (task) => {

  
  const id = Math.floor(Math.random()*10000)+1
  // console.log(id)
  const newTask = {id, ...task}
  console.log(newTask);
  setTasks([...tasks, newTask])

}

// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

//Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task)=> task.id===id?{
    ...task, reminder: !task.reminder
  }:task))
}

  return (
      <div className="container">
        <Header isadded={showAddTask} onAdd={()=> setShowAddTask(!showAddTask)} />

        {showAddTask && <AddTask onAdd={addTask}/>}
        
        {tasks.length>0?<Tasks tasks={tasks} onDelete={deleteTask} toggleReminder={toggleReminder}/>:'No tasks'}
      </div>
  );
}

export default App;
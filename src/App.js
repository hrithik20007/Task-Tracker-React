import { useState, useEffect } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask,setAddTask] = useState(false)

  const [tasks,setTasks] = useState([])

//Issue 
//For adding tasks
const onAdd = async (e) =>{
  const postTask=await fetch(`http://localhost:5000/tasks/`,{
    method:'POST',
    headers:{'Content-type':'application/json'},
    body:JSON.stringify(e),
  })
  const data = await postTask.json()
  setTasks([...tasks,data])

  //const id=Math.floor(Math.random()*1000)+1
  //const newTask = {id, ...e}
  //setTasks([...tasks, newTask])
}

//Issue
useEffect(() => {
  const getTasks = async() => {
    // const serverTask = await fetchTasks()
    // setTasks(serverTask)
    const response= await fetch('http://localhost:5000/tasks')
    const data= await response.json()
    setTasks(data)

  }
  getTasks()
},[])
//Issue
//Fetch Tasks
// const fetchTasks= async() => {
//   const response= await fetch('http://localhost:5000/tasks')
//   const data= await response.json()
//   return data
// }

//Issue
//For deleting tasks
const deleteTask = async (e) =>{
  await fetch(`http://localhost:5000/tasks/${e}`, { method: 'DELETE'})

  //setTasks(tasks.filter((task) => task.id!==e))
}

//Issue
//For toggling reminder green left-padding
const toggleRem = (e) =>{
  setTasks(tasks.map((task) =>
    (task.id === e)? 
    {...task, reminder:!task.reminder} : task
    ))
}

  return (
    <div className="container">
      <Header 
        title="Task Tracker" 
        showtask={() => setAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={onAdd}/>}
      {tasks.length>0?(
          <Tasks tasks={tasks} deleteTask={deleteTask} toggleRem={toggleRem}/>
      ):(
        <h3>No Tasks</h3>
      )}
    </div>
  );
}

export default App;

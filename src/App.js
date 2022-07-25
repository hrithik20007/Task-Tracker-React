import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks,setTasks] = useState([    
    {
        id:1,
        text:'Gym And Exercise',
        day: '26th July at 9am',
        reminder:true,
    },
    {
        id:2,
        text:'Drumming Practice',
        day:'25th July at 11:30pm',
        reminder:true,
    },
    {
        id:3,
        text:'Working On Projects',
        day:'26th July at 5:30pm',
        reminder:false,
    }
])

//Issue
//For deleting tasks
const deleteTask = (e) =>{
  setTasks(tasks.filter((task) => task.id!==e))
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
      <Header title="Task Tracker"/>
      {tasks.length>0?(
          <Tasks tasks={tasks} deleteTask={deleteTask} toggleRem={toggleRem}/>
      ):(
        <h3>No Tasks</h3>
      )}
    </div>
  );
}

export default App;

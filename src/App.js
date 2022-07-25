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

//For deleting tasks
const deleteTask = (id) =>{
  setTasks(tasks.filter((task) => task.id!==id))
}

  return (
    <div className="container">
      <Header title="Task Tracker"/>
      {tasks.length>0?(
          <Tasks tasks={tasks} deleteTask={deleteTask}/>
      ):(
        <h3>No Tasks</h3>
      )}
    </div>
  );
}

export default App;

import Task from './Task'

const Tasks = ({tasks , deleteTask, toggleRem}) => {
  return (
    <>
        {tasks.map((task) => (
            <Task key={task.id} task={task} deleteTask={deleteTask} toggleRem={toggleRem}/>
        ))}
    </>
  )
}

export default Tasks
import { FaTimes } from 'react-icons/fa'

//Issue
const Task = ({task , deleteTask, toggleRem}) => {
  return (
    <div 
    className={`task ${task.reminder?'reminder':''}`}
    onDoubleClick={() => toggleRem(task.id)}>
        <h3>
            {task.text} <FaTimes style={{ color:'red',
            cursor:'pointer'}} 
            onClick={() => deleteTask(task.id)}/> 
        </h3>
        <p>{task.day}</p>
    </div>
  )
}

export default Task
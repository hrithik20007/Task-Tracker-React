import { useState } from 'react'

//Issue
const AddTask = ({ onAdd }) => {
  const[text,setText] = useState('')
  const[day,setDate] = useState('')
  const[reminder,setReminder] = useState(false)

  const onSubmit = (e) =>{
    e.preventDefault()

    if(!text || !day){
      alert('Enter All Parameters')
      return
    }

    onAdd({text, day, reminder})

    setText('')
    setDate('')
    setReminder(false)
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Text</label>
        <input 
          type='text' 
          placeholder='Add Task Here'
          value={text}
          onChange={(e)=>setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Date & Time</label>
        <input 
          type='text' 
          placeholder='Add Date & Time Here'
          value={day}
          onChange={(e)=>setDate(e.target.value)}
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input 
          type='checkbox'
          value={reminder}  //?
          checked={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type='submit' value='Save Task' className='btn btn-block'/>
    </form>
  )
}

export default AddTask
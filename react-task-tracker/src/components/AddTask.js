//rafce
import {useState} from 'react'


const AddTask = () => {
    // const [text,settext] = useState('')
    // const [text,settext] = useState('')
    
  return (
    <form className='add-form'>
        <div className='form-control'>
            <label>Task</label>
            <input type = 'text' placeholder="Add Task" />
        </div>
        <div className='form-control'>
            <label>Day & Time</label>
            <input type = 'text' placeholder="Add Time" />
        </div>
        <div className='form-control form-control-check'>
            <label>Set Reminder</label>
            <input type = 'checkbox'/>
        </div>

        <div type = 'submit' value='Save Task' className="btn btn-block"/>
    </form>
  )
}

export default AddTask
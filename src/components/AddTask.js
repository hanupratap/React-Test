import {useState} from 'react'




const AddTask = ({onAdd}) => {
    const [title, setTitle] = useState('')
    const [reminder, setReminder] = useState('')
    const onSubmit = (e) => {
        e.preventDefault()
                
        if(!title){
            alert('Please add task')
            return;
        }
        
        onAdd({title, reminder});

        setTitle('')
        setReminder('')

    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task' value={title} onChange={(e)=>setTitle(e.target.value)} />

            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox' value={reminder} onChange={(e)=> setReminder(e.currentTarget.checked)} />
            </div>
            <input type='submit' value='Save Task' className='btn btn-block' />

        </form>
    )
}

export default AddTask

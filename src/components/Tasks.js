import Task from "./Task";

const Tasks = ({tasks, onDelete, toggleReminder})=>{

    return  (
        <div className="container">
            {tasks.map( (task) => (<Task key={task.id} task={task} onDelete={onDelete} toggleReminder={toggleReminder} />) )}
        </div>

    );
}

export default Tasks
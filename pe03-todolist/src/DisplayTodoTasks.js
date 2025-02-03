import "./DisplayTodoTasks.css";  // Import css styles file for the component

// creating a functional component DisplayTodoTasks that displays a list of tasks
// also provides the functionality to delete individual tasks

function DisplayTodoTasks({ tasks, deleteTask }) {

    return (
        <div>

            {tasks.map((task, index) => (  // To iterate the tasks array
                <div key={index} className="task">
                    <span>{task}</span>  {/*Inline container to align with delete button*/}

                    <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                </div>
            ))}
        </div>
    )


}

export default DisplayTodoTasks;
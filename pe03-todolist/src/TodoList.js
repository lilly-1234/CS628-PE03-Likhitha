import React, { useState } from "react";
import DisplayTodoTasks from "./DisplayTodoTasks"; // Import the DisplayTodoTasks component
import "./TodoList.css"; // Import the DisplayTodoTasks component

// Creating functional component to manage a to-do list application
function TodoList() {
    const [taskNameInput, setTaskNameInput] = useState(""); //State to hold the current task name 
    const [allTasks, setAllTasks] = useState([]); // State to hold the list of tasks

    // Function to handle changes in the task
    const handleTaskNameInputChange = (event) => {
        setTaskNameInput(event.target.value);
    };
    
    // Function to add a new task to the list
    const addTaskToList = () => {
        setAllTasks([...allTasks, taskNameInput]);
        setTaskNameInput("");  // Clear the input after adding each task
    }
    
    // Function to delete a task from the list
    const deleteTaskFromList = (indexToRemove) => {
        // Filter out the task based on the specified index
        var tasks = allTasks.filter((task, index) => {  
            return index !== indexToRemove
        });
        setAllTasks(tasks);
    }


    return (
        <div>
            <h1 className="title"> 
                ToDo List App
            </h1>
            <div>
                <div>
                    <input
                        id="taskInput"
                        type="text"
                        value={taskNameInput}
                        onChange={handleTaskNameInputChange}
                        placeholder="Enter task description"
                    />
                </div>
                <div>

                    <button className="add-task" onClick={addTaskToList}>Add Task</button>
                </div>
            </div>


            <DisplayTodoTasks tasks={allTasks} deleteTask={deleteTaskFromList} />   {/* To display tasks and deletion function */}


        </div>
    )


}

export default TodoList;
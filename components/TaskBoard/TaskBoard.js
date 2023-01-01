import React, { useState } from 'react';
import AddTaskDialog from '../AddTaskDialog/AddTaskDialog';
import DeleteTaskDialog from '../DeleteTaskDialog/DeleteTaskDialog';
import Task from '../Task/Task';
import styles from './TaskBoard.module.css';
import Image from 'next/image';
import { v4 as uuid } from 'uuid';

export default function TaskBoard(props) {
    const [tasks, setTasks] = useState([]);
    const [addTaskDialogOpen, setAddTaskDialogOpen] = useState(false);

    const handleAddTask = ({category, title, description, deadline}) => {
        setTasks((prevTasks) => [
            ...prevTasks,
            {
                "id": uuid(),
                "category": category,
                "title": title,
                "description": description,
                "deadline": deadline
            }
        ])
    }

    const handleDeleteTask = (id) => {
        setTasks(prevTasks => prevTasks.filter(item => item.id !== id))
    }

    const taskElements = tasks.map(task => {
        return (
            <Task
                key={task.id}
                category={task.category}
                title={task.title}
                description={task.description || "..."}
                deadline={task.deadline || "..."}
                deleteTask={()=>handleDeleteTask(task.id)}
            />
        )
    })
    
    return (
        <>
            <div className={styles.board}>
                <div className={styles.board_headers}>
                    <div className={styles.header}>Category</div>
                    <div className={styles.header}>Title</div>
                    <div className={styles.header}>Description</div>
                    <div className={styles.header}>Deadline</div>
                    <button className={styles.add_task_button} onClick={() => setAddTaskDialogOpen(true)} title="Click to create a new task">
                        <Image className={styles.add_icon}
                            src="/cross-icon.svg"
                            alt='Add Icon'
                            height={15}
                            width={15}
                        />
                        <span>Add Task</span>
                    </button>
                </div>
                {taskElements}
            </div>
            {addTaskDialogOpen && 
            <AddTaskDialog closeDialog={() => setAddTaskDialogOpen(false)} handleAddTask={(task)=>handleAddTask(task)}/>
            }
        </>
    )
}
import React, { useState } from 'react';
import AddTaskDialog from '../AddTaskDialog/AddTaskDialog';
import Task from '../Task/Task';
import styles from './TaskBoard.module.css';
import Image from 'next/image';
import { useUser } from '../../context/UserContext';

export default function TaskBoard({tasks, setTasks}) {
    const user = useUser();
    const [addTaskDialogOpen, setAddTaskDialogOpen] = useState(false);

    const handleAddTask = async ({category, title, description, deadline}) => {
        const task = {
            createdAt: Date.now(),
            body: {
                category: category,
                title: title,
                description: description,
                deadline: deadline,
                completed: false
            },
            user: {
                id: user.id,
                name: user.name,
                nickname: user.nickname
            }
        };

        const response = await fetch("/api/task", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        });

        const responseJson = await response.json();

        setTasks((tasks) => [
            ...tasks,
            {
                _id: responseJson.insertedId,
                ...task
            }
        ]);
    }

    const taskElements = tasks.map(task => {
        return (
            <Task
                key={task._id}
                task={task}
                setTasks={setTasks}
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
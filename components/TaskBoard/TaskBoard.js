import React, { useEffect, useState } from 'react';
import AddTaskDialog from '../AddTaskDialog/AddTaskDialog';
import Task from '../Task/Task';
import styles from './TaskBoard.module.css';
import Image from 'next/image';
import { v4 as uuid } from 'uuid';

export default function TaskBoard(props) {
    const [tasks, setTasks] = useState([]);
    const [addTaskDialogOpen, setAddTaskDialogOpen] = useState(false);

    useEffect(()=> {
        (async () => {
            const getTasks = await fetch("/api/task");
            const getTasksJson = await getTasks.json().finally();
            setTasks(getTasksJson.map(task => ({id: task._id, ...task})));
        })();
    }, [])

    const handleAddTask = async ({category, title, description, deadline}) => {
        const task = {
            createdAt: Date.now(),
            body: {
                category: category,
                title: title,
                description: description,
                deadline: deadline,
            },
            user: {
                id: "aglkahgla",
                name: "Arian Sadeghi",
                username: "ariosh"
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
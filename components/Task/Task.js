import React, { useState } from 'react';
import styles from './Task.module.css';
import Image from 'next/image';
import DeleteTaskDialog from '../DeleteTaskDialog/DeleteTaskDialog';
import EditTaskDialog from '../EditTaskDialog/EditTaskDialog';

export default function Task({task, setTasks}) {
    const {_id, user, body} = task;
    const {category, title, description, deadline, completed} = body;

    const [deleteTaskDialogOpen, setDeleteTaskDialogOpen] = useState(false);
    const [editTaskDialogOpen, setEditTaskDialogOpen] = useState(false);

    const onEditTask = async (editedTask) => {
        const response = await fetch("/api/task", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                _id,
                body: editedTask.body
            })
        });

        const responseJson = await response.json();

        setTasks((prevTasks) => prevTasks.map(task => {
            return task._id !== _id ? task : {
                ...task,
                body: editedTask.body
            }
        }));
    };

    const onCompletedChange = (event) => {
        onEditTask({
            ...task,
            body: {
                ...body,
                completed: event.target.checked
            }
        })
    }

    const onDeleteTask = async () => {
        const response = await fetch("/api/task", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({_id})
        });

        const responseJson = await response.json();

        setTasks(tasks => tasks.filter(item => item._id !== _id));
    };

    return (
        <>
            <div className={styles.task}>
                <div>{category}</div>
                <div>{title}</div>
                <div>{description}</div>
                <div>{deadline}</div>
                <button className={styles.action_button} onClick={()=>setEditTaskDialogOpen(true)}>
                    <Image
                        src="/edit-icon.svg"
                        alt='Edit Icon'
                        height={20}
                        width={20}
                    />
                </button>
                <button className={styles.action_button} onClick={()=>setDeleteTaskDialogOpen(true)}>
                    <Image
                        src="/delete-icon.svg"
                        alt='Edit Icon'
                        height={20}
                        width={20}
                    />
                </button>
                <input type='checkbox' title='Completed Check' checked={completed} className={styles.completed_check} onChange={onCompletedChange}></input>
            </div>
            {editTaskDialogOpen &&
            <EditTaskDialog  
                task={task}
                closeDialog={() => setEditTaskDialogOpen(false)}
                editTask={onEditTask}
            />
            }
            {deleteTaskDialogOpen &&
            <DeleteTaskDialog closeDialog={() => setDeleteTaskDialogOpen(false)} deleteTask={onDeleteTask}/>
            }
        </>
    )
}
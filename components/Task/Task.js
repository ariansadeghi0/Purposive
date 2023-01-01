import React, { useState } from 'react';
import styles from './Task.module.css';
import Image from 'next/image';
import DeleteTaskDialog from '../DeleteTaskDialog/DeleteTaskDialog';

export default function Task({category, title, description, deadline, deleteTask}) {
    const [deleteTaskDialogOpen, setDeleteTaskDialogOpen] = useState(false);

    return (
        <>
            <div className={styles.task}>
                <div>{category}</div>
                <div>{title}</div>
                <div>{description}</div>
                <div>{deadline}</div>
                <button className={styles.action_button}>
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
                <input type='checkbox' title='Completed Check' className={styles.completed_check}></input>
            </div>
            {deleteTaskDialogOpen &&
            <DeleteTaskDialog closeDialog={() => setDeleteTaskDialogOpen(false)} handleDeleteTask={deleteTask}/>
            }
        </>
    )
}
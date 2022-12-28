import React from "react";
import styles from "./AddTaskDialog.module.css";
import Image from 'next/image'

export default function AddTaskDialog({closeDialog, handleAddTask}) {
    const handleSubmit = (event) => {
        event.preventDefault();
        handleAddTask({
            category: event.target.category.value,
            title: event.target.title.value,
            description: event.target.description.value,
            deadline: event.target.deadline.value
        })
        closeDialog();
    }
    
    return (
        <div className={styles.overlay} onClick={closeDialog}>
            <div className={styles.dialog} onClick={(e)=>{e.stopPropagation();}}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.container}>
                        <div className={styles.container_vertical}>
                            <label className={styles.label} htmlFor="category">Category:</label>
                            <input className={styles.textfield} type="text" id="category" name="category" placeholder="e.g. Extracurricular" required></input>
                        </div>

                        <div className={styles.container_vertical}>
                            <label className={styles.label} htmlFor="title">Title:</label>
                            <input className={styles.textfield} type="text" id="title" name="title" placeholder="e.g. Coding Competition" required></input>
                        </div>

                        <div className={styles.container_vertical}>
                            <label className={styles.label} htmlFor="deadline">Deadline</label>
                            <input className={styles.date} type="date" id="deadline" name="deadline"></input>
                        </div>
                    </div>
                    <label className={styles.label} htmlFor="description">Description:</label>
                    <textarea className={styles.textarea} id="description" name="description" placeholder="Describe the details of this task..."></textarea>
                    <button className={styles.create_button} type="submit">Create Task</button>
                </form>
                <Image className={styles.close_icon}
                    src="/cross-icon.svg"
                    alt='Close Icon'
                    height={20}
                    width={20}
                    onClick={closeDialog}
                />
            </div>
        </div>
    )
}
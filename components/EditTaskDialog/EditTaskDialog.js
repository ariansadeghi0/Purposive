import React from "react";
import styles from "./EditTaskDialog.module.css";
import Image from "next/image";

export default function EditTaskDialog({category, title, description, deadline, closeDialog, handleEditTask}){
    const handleSubmit = (event) => {
        event.preventDefault();
        handleEditTask({
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
                            <input defaultValue={category} className={styles.textfield} type="text" id="category" name="category" placeholder="e.g. Extracurricular" required></input>
                        </div>

                        <div className={styles.container_vertical}>
                            <label className={styles.label} htmlFor="title">Title:</label>
                            <input defaultValue={title} className={styles.textfield} type="text" id="title" name="title" placeholder="e.g. Coding Competition" required></input>
                        </div>

                        <div className={styles.container_vertical}>
                            <label className={styles.label} htmlFor="deadline">Deadline</label>
                            <input defaultValue={deadline} className={styles.date} type="date" id="deadline" name="deadline"></input>
                        </div>
                    </div>
                    <label className={styles.label} htmlFor="description">Description:</label>
                    <textarea defaultValue={description} className={styles.textarea} id="description" name="description" placeholder="Describe the details of this task..."></textarea>
                    <button className={styles.save_button} type="submit">Save changes</button>
                </form>
                <button className={styles.close_button} onClick={closeDialog}>
                    <Image
                        src="/cross-icon.svg"
                        alt='Close Icon'
                        height={20}
                        width={20}
                    />
                </button>
            </div>
        </div>
    )
}
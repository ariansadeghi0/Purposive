import React from "react";
import styles from "./DeleteTaskDialog.module.css";
import Image from "next/image";

export default function DeleteTaskDialog({deleteTask, closeDialog}){
    const handleSubmit = (event) => {
        event.preventDefault();
        deleteTask();
        closeDialog();
    }

    return (
        <div className={styles.overlay} onClick={closeDialog}>
            <div className={styles.dialog} onClick={(e)=>{e.stopPropagation();}}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div>Are you sure you want to delete this task? This is an irreversible action.</div>
                    <button className={styles.delete_button} type="submit">Yes, delete the task</button>
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
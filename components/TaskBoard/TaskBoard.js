import React from 'react';
import Task from '../Task/Task';
import styles from './TaskBoard.module.css';

export default function TaskBoard(props) {
    return (
        <div className={styles.board}>
            <div className={styles.board_headers}>
                <div className={styles.header}>Category</div>
                <div className={styles.header}>Title</div>
                <div className={styles.header}>Description</div>
                <div className={styles.header}>Deadline</div>
                <button className={styles.add_task_button}>Add Task</button>
            </div>
            
            <Task
                category="CSC207"
                title="Final Project"
                description="Blah Blah Blah"
                deadline="December 7th, 2022"
            />
            <Task
                category="CSC207"
                title="Final Project"
                description="Blah Blah Blah"
                deadline="December 7th, 2022"
            />
            <Task
                category="CSC207"
                title="Final Project"
                description="Blah Blah Blah"
                deadline="December 7th, 2022"
            />
            <Task
                category="CSC207"
                title="Final Project"
                description="Blah Blah Blah"
                deadline="December 7th, 2022"
            />
        </div>
    )
}
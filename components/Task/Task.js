import React from 'react';
import styles from './Task.module.css';
import Image from 'next/image'

export default function Task({category, title, description, deadline}) {
    return (
        <div className={styles.task}>
            <div>{category}</div>
            <div>{title}</div>
            <div>{description}</div>
            <div>{deadline}</div>
            <Image className={styles.edit_icon}
                src="/edit-icon.svg"
                height={20}
                width={20}
            />
            <input type='checkbox' className={styles.completed_check}></input>
        </div>
    )
}
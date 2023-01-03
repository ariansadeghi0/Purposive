import Link from "next/link"
import React from "react"
import styles from "./NavBar.module.css"

export default function NavBar() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>purposive</h1>
            <Link className={styles.logout_link} href={"/api/auth/logout"}>Logout</Link>
        </div>
    )
}
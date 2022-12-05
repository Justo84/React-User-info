import React from "react";
import Card from "../UI/Card";
import styles from './AddUser.module.css'

const AddUser = () => {

    const addUserHandler = (event) => {
        event.preventDefault();

    }

    return (
        <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
            <label className={styles.label} htmlFor="username">Username</label>
            <input className={styles.input} id="username" type="text" />
            <label className={styles.label} htmlFor="userage">Age (years)</label>
            <input className={styles.input} id="userage" type="number" />
            <button type="submit">Add User</button>
        </form>
        </Card>
    )
}

export default AddUser;
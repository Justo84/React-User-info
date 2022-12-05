import React, { useState } from "react";
import Card from "../UI/Card";
import styles from './AddUser.module.css'
import Button from "../UI/Button";


const AddUser = () => {
    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().lenght === 0 ) {
            return
        }

        // + forces a conversion to a number from a string
        if (+enteredAge < 1) {
            return
        }
        console.log(`Username: ${enteredUsername}, Age: ${enteredAge}`)
        setEnteredUsername('')
        setEnteredAge('')
    }

    const userNameHandler = (e) => {
        setEnteredUsername(e.target.value)
    }
    const ageChangeHandler = (e) => {
        setEnteredAge(e.target.value)
    }
    return (
        <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
            <label className={styles.label} htmlFor="username">Username</label>
            <input className={styles.input} value={enteredUsername} onChange={userNameHandler} id="username" type="text" />
            <label className={styles.label} htmlFor="userage">Age (years)</label>
            <input className={styles.input} value={enteredAge} onChange={ageChangeHandler} id="userage" type="number" />
            <Button type="submit">Add User</Button>
        </form>
        </Card>
    )
}

export default AddUser;
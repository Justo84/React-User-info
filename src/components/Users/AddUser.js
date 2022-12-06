import React, { useState } from "react";
import Card from "../UI/Card";
import styles from './AddUser.module.css'
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";


const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [errorMessage, setErrorMessage] = useState()

    const addUserHandler = (event) => {
        event.preventDefault();

        // makes sure neither input is empty
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0 ) {
            setErrorMessage({title: "Invalid input", message: "Enter a valid name and age."})
            return
        }

        // + forces a conversion to a number from a string
        if (+enteredAge < 1) {
            setErrorMessage({title: "Invalid age", message: "Enter a valid age."})
            return
        }
        props.onAddUser(enteredUsername, enteredAge)
        // resets inputs to empty after user submits data
        setEnteredUsername('')
        setEnteredAge('')
    }

    const userNameHandler = (e) => {
        setEnteredUsername(e.target.value)
    }
    const ageChangeHandler = (e) => {
        setEnteredAge(e.target.value)
    }

    const errorHandler = () => {
        setErrorMessage(null)
        }

    return (
        <div>
        {errorMessage && <ErrorModal title={errorMessage.title} message={errorMessage.message} onConfirm={errorHandler}/>}
        <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
            <label className={styles.label} htmlFor="username">Username</label>
            <input className={styles.input} value={enteredUsername} onChange={userNameHandler} id="username" type="text" />
            <label className={styles.label} htmlFor="userage">Age (years)</label>
            <input className={styles.input} value={enteredAge} onChange={ageChangeHandler} id="userage" type="number" />
            <Button type="submit">Add User</Button>
        </form>
        </Card>
        </div>
    )
}

export default AddUser;
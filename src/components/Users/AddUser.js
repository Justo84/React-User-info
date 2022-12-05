import React from "react";

const AddUser = () => {

    const addUserHandler = (event) => {
        event.preventDefault();
        


    }

    return (
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" />
            <label htmlFor="userage">Age (years)</label>
            <input id="userage" type="number" />
            <button type="submit">Add User</button>
        </form>
    )
}

export default AddUser;
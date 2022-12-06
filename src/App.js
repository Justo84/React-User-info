import React, {useState} from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {

  const [usersList, setUsersList] = useState([])

  // let users = [
  //   {name: "Justin", age: "38"},
  //   {name: "Sarah", age: "32"}
  // ]

  const addUserHandler = (userName, userAge) => {
      // when adding data through useState, use a function
    setUsersList((prevUserList) => {
      return [...prevUserList, {name: userName, age: userAge, id: Math.random().toString()}]
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
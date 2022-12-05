import React from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {

  let users = [
    {name: "Justin", age: "38"},
    {name: "Sarah", age: "32"}
  ]

  return (
    <div>
      <AddUser />
      <UsersList users={users} />
    </div>
  );
}

export default App;
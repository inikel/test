import { useState } from 'react';
import Link from 'next/link'

const Users = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Petya' },
    { id: 2, name: 'Vasya'}
  ]); 

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user =>
          <Link key={user.id} href={`/users/${user.id}`}>
            <a>{user.name}</a>
          </Link>
        )}
      </ul>
    </div>
  )
}

export default Users;
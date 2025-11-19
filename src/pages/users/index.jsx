import { Link } from 'react-router'

Link

const users = [
  { id: 1, name: 'Alex', bio: 'Softwere engenier' },
  { id: 2, name: 'Alice', bio: 'Admin' },
  { id: 3, name: 'Max', bio: 'Manager' },
]

function Users() {
  return (
    <div>
      <ul>
        {users.map((el) => (
          <li key={el.id}>
            <Link to={`/users/${el.id}`}>{el.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Users

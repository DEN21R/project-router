import { Link } from 'react-router'

Link

function Users({ users }) {
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

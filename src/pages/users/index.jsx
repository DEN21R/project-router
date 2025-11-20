import { Link } from 'react-router'

import styles from './styles.module.css'

function Users({ users }) {
  return (
    <div className={styles.users}>
      <ul>
        {users.map((el) => (
          <li key={el.id}>
            <Link to={`/users/${el.id}`} className={styles.link}>
              {el.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Users

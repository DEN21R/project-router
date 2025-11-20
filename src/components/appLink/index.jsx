import { NavLink } from 'react-router'
import styles from './styles.module.css'

function AppLink({ path, title }) {
  return (
    <NavLink
      className={({ isActive }) => (isActive ? styles.activLink : styles.link)}
      to={path}
    >
      {title}
    </NavLink>
  )
}
export default AppLink

import AppLink from '../appLink'
import styles from './styles.module.css'

const menuNav = [
  {
    path: '/',
    title: 'Home',
  },
  {
    path: '/users',
    title: 'Users',
  },
]

function Navbar() {
  return (
    <div className={styles.navbar}>
      <ul className={styles.navbarContainer}>
        {menuNav.map((el, i) => (
          <li key={i + el.title}>
            <AppLink path={el.path} title={el.title} />
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Navbar

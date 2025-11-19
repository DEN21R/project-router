import AppLink from '../appLink'

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
    <div>
      <ul>
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

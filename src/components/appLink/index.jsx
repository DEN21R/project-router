import { Link } from 'react-router'

function AppLink({ path, title }) {
  return <Link to={path}>{title}</Link>
}
export default AppLink

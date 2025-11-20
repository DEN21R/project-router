import { useParams, useNavigate } from 'react-router'

function UserProfile({ users }) {
  const { userId } = useParams()
  const navigate = useNavigate()

  const user = users.find((el) => el.id === Number(userId))

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Age: {user.age}</p>
      <p>Position at work: {user.bio}</p>
      <button onClick={() => navigate('/users')}>back to users</button>
    </div>
  )
}
export default UserProfile

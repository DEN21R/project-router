import { useParams } from 'react-router'

useParams

function UserProfile({ users }) {
  const { userId } = useParams()

  const user = users.find((el) => el.id === Number(userId))

  return (
    <div>
      <h2>{user.id}</h2>
      <p>{user.name}</p>
      <p>{user.age}</p>
      <p>{user.bio}</p>
    </div>
  )
}
export default UserProfile

import { useParams } from 'react-router-dom'

function Profile() {
  const { id } = useParams()
  return (
    <main>
      <h1>{id}</h1>
    </main>
  )
}

export default Profile

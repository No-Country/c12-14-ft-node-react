import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { MdModeEdit } from 'react-icons/md'

const fetchData = async (id) => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/users/${id}`
  )
  const data = await response.data.user
  return data
}

function Profile() {
  const { id } = useParams()
  const [user, setUser] = useState(null)

  const fetchUserProfile = async (id) => {
    const user = await fetchData(id)
    setUser(user)
  }

  useEffect(() => {
    fetchUserProfile(id)
  }, [id])

  // const handleEditPhoto = () => {};
  // const handleEditProfile = () => {};

  return (
    <>
      {user && (
        <main>
          {/* user */}
          <section className='flex '>
            <div>
              <img
                src={user?.photo || '/src/assets/default.png'}
                onError={(e) => {
                  e.target.src = '/src/assets/default.png'
                }}
                alt={user.userName}
                className=' h-40 w-40 rounded-full'
              />
              <div className='h-3 w-3 rounded-full bg-green-400'></div>
              <button className=' rounded-full border-2 border-primary p-1'>
                <MdModeEdit />
              </button>
            </div>

            <div>
              <h2>{user?.userName}</h2>
              <p>
                {user?.stack.length > 0 &&
                  user.stack.map((item) => (
                    <span
                      key={item}
                      className='rounded-full bg-gray-200 px-2 py-1'
                    >
                      {item.name}
                    </span>
                  ))}
              </p>
              <div>
                {user?.socialsMedia > 0 &&
                  user?.socialsMedia.map((item) => (
                    <span
                      key={item}
                      className='rounded-full bg-gray-200 px-2 py-1'
                    >
                      {item.name}
                    </span>
                  ))}
              </div>
            </div>

            <button>Editar Perfil</button>
          </section>

          {/* stack and about me */}
          <section></section>

          {/* project me */}
          <section></section>

          {/* colaborations */}
          <section></section>
        </main>
      )}
    </>
  )
}

export default Profile

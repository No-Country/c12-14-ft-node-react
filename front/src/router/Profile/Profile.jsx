import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { openModal } from '../../redux/slices/modalSlice'
import { MdModeEdit } from 'react-icons/md'
import Modal from '../../components/Modals/Modal'
import ModalEditPhoto from '../../components/Modals/ModalEditPhoto/ModalEditPhoto'
import ModalEditProfile from '../../components/Modals/ModalEditProfile/ModalEditProfile'
import ModalEditInfo from '../../components/Modals/ModalEditInfo/ModalEditInfo'
import { setUser } from '../../redux/slices/userSlice'
import getUser from '../../libs/getUser'
import ModalEditStack from '../../components/Modals/ModalEditStack/ModalEditStack'

function Profile() {
  const dispatch = useDispatch()
  const { id } = useParams()

  const [admin, setAdmin] = useState(false)
  const {
    modal,
    user: { user },
  } = useSelector((state) => state)
  const userId = useSelector((state) => state.auth.user._id)

  useEffect(() => {
    const User = async (id) => {
      const data = await getUser(id)
      dispatch(setUser(data))
    }

    if (userId === id) {
      setAdmin(true)
    }

    User(id)
  }, [id, dispatch])

  const handleEditPhoto = () => {
    dispatch(openModal('photo'))
  }

  const handleEditProfile = () => {
    dispatch(openModal('profile'))
  }

  const handleEditInfo = () => {
    dispatch(openModal('info'))
  }

  const handleEditStack = () => {
    dispatch(openModal('stack'))
  }

  return (
    <>
      {user && (
        <main className=' grid-profile max-w-6xl py-20'>
          {/* Modal Edit Photo */}
          {modal.photo && (
            <Modal>
              <ModalEditPhoto user={user} />
            </Modal>
          )}
          {/* Modal Edit Profile */}
          {modal.profile && (
            <Modal>
              <ModalEditProfile user={user} />
            </Modal>
          )}
          {/* Modal Edit Info (Stack and About me) */}
          {modal.info && (
            <Modal>
              <ModalEditInfo user={user} />
            </Modal>
          )}
          {/* Modal Edit Info (Stack and About me) */}
          {modal.stack && (
            <Modal>
              <ModalEditStack user={user} />
            </Modal>
          )}

          {/* user */}
          <section
            className='container flex justify-between'
            style={{ gridArea: 'user' }}
          >
            {/* image */}
            <div className='relative'>
              <img
                src={user?.photo || '/src/assets/default.png'}
                onError={(e) => {
                  e.target.src = '/src/assets/default.png'
                }}
                alt={user.userName}
                className=' h-40 w-40 rounded-full'
              />
              <div className=' absolute bottom-4 right-2 h-6 w-6 rounded-full border-2 bg-green-400'></div>
              {admin && (
                <button
                  onClick={handleEditPhoto}
                  className='absolute top-6 rounded-full border-2 border-primary bg-white p-1'
                >
                  <MdModeEdit />
                </button>
              )}
            </div>

            {/* info */}
            <div className='flex w-1/2 flex-col justify-evenly'>
              <h2>{user?.userName}</h2>
              <p className=' flex'>
                {user.roles.map((item, index) => (
                  <span
                    key={item.name}
                    className={` pr-2 ${
                      index !== 0 ? 'border-l-2  border-gray-400 pl-2' : ''
                    }`}
                  >
                    {item.name}
                  </span>
                ))}
              </p>
              <div className=' flex gap-4'>
                {user?.socialsMedia.map((item) => (
                  <Link
                    target='_blank'
                    to={item.link}
                    key={item.link}
                    className='rounded-full bg-primary px-6 py-2 font-bold text-white'
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* edit profile */}
            {admin && (
              <button onClick={handleEditProfile} className=' btn-edit-profile'>
                Editar Perfil
              </button>
            )}
          </section>
          {/* stack and about me */}
          <section
            className='container flex flex-col justify-between'
            style={{ gridArea: 'stack' }}
          >
            <div className='flex flex-col gap-5'>
              <div className=' flex justify-between'>
                <h3 className=' text-xl font-bold text-primary'>
                  Stack tecnológico
                </h3>
                {admin && (
                  <button
                    onClick={handleEditStack}
                    className='rounded-full border-2 border-primary bg-white p-1'
                  >
                    <MdModeEdit />
                  </button>
                )}
              </div>
              <div className='flex flex-wrap gap-4'>
                {user?.stack.map((item) => (
                  <span
                    key={item.id}
                    className=' rounded-2xl bg-[#C5E8D7] px-4 py-2'
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>

            <div className='flex flex-col gap-5'>
              <h3 className=' text-xl font-bold text-primary'>Sobre mí</h3>
              <p>{user?.description}</p>
            </div>
          </section>
          {/* project me */}
          <section
            className='container flex flex-col gap-5'
            style={{ gridArea: 'projects' }}
          >
            <h2 className=' text-xl font-bold text-primary'>
              Proyectos publicados
            </h2>
            <ol className=' list-decimal'>
              {user?.adminProjects.length > 0 &&
                user?.adminProjects.map((project) => (
                  <li key={project._id}>
                    <p
                      value={project._id}
                      className='cursor-pointer font-bold underline'
                    >
                      {project.title}
                    </p>
                  </li>
                ))}
            </ol>
          </section>
          {/* colaborations */}
          <section
            className='container flex flex-col gap-5'
            style={{ gridArea: 'collaborations' }}
          >
            <h2 className=' text-xl font-bold text-primary'>Colaboraciones</h2>
            <ol className=' flex list-decimal flex-col gap-5'>
              {user?.collaboratorProjects.length > 0 &&
                user?.collaboratorProjects.map((project, index) => (
                  <li key={project._id + index}>
                    <h3
                      value={project._id}
                      className='cursor-pointer font-bold underline'
                    >
                      {project.title}
                    </h3>
                    <p>{project.description}</p>
                  </li>
                ))}
            </ol>
          </section>
        </main>
      )}
    </>
  )
}

export default Profile

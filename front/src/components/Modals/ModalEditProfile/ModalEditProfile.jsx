import { useDispatch } from 'react-redux'
import { closeModal } from '../../../redux/slices/modalSlice'

function ModalEditProfile({ edit, setEdit, user }) {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(closeModal('profile'))
  }

  return (
    <div>
      <button onClick={handleClick}>x</button>
      <h1>Edit Profile</h1>
    </div>
  )
}

export default ModalEditProfile

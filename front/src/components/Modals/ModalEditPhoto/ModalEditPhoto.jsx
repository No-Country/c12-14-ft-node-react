import { useDispatch } from 'react-redux'
import { closeModal } from '../../../redux/slices/modalSlice'

function ModalEditPhoto({ user }) {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(closeModal('photo'))
  }
  return (
    <div>
      <button onClick={handleClick}>x</button>
      <h1>Edit Photo</h1>
    </div>
  )
}

export default ModalEditPhoto

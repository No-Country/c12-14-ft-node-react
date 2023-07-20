import { useDispatch } from 'react-redux'
import { closeModal } from '../../../redux/slices/modalSlice'

function ModalEditInfo({ user }) {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(closeModal('info'))
  }
  return (
    <div>
      <button onClick={handleClick}>x</button>
      <h1>Edit stack and about me</h1>
    </div>
  )
}

export default ModalEditInfo

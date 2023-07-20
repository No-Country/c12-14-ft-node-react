import { createPortal } from 'react-dom'

function Modal({ children }) {
  return createPortal(
    <div className='fixed top-0 grid h-screen w-screen place-items-center bg-[#00000069] backdrop-blur'>
      {children}
    </div>,
    document.getElementById('modal')
  )
}

export default Modal

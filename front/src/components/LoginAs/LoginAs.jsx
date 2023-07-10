import { AiOutlineCloseCircle } from 'react-icons/ai'

const LoginAs = () => {
  return (
    <div>
      <p className='text-sm font-semibold mb-3'>Login as</p>
      {/* Card */}
      <div className='h-[164px] w-[145px] bg-[#959697] rounded-lg flex flex-col justify-evenly items-center relative'>
        <button className='absolute text-white top-2 right-2'>
          <AiOutlineCloseCircle />
        </button>
        <figure className='h-[75px] w-[75px] rounded-full bg-[#C4C4C4]'>
          {/* Profile Picture */}
        </figure>
        <p className='text-black font-semibold text-sm'>Nombre Apellido</p>
        <p className='text-white text-sm font-thin'>Activo hace 1 día</p>
      </div>
    </div>
  )
}

export default LoginAs

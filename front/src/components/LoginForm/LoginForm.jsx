import { Link } from 'react-router-dom'
import GoogleLogo from '@/assets/GoogleLogo.png'

const LoginForm = () => {
  return (
    <div className='bg-white w-[539px] p-10 rounded-xl flex flex-col gap-10 formShadow'>
      <section className='flex w-full justify-between'>
        <p className='text-xl font-semibold'>Bienvenido</p>

        <p className='text-sm text-gray-400'>
          No tienes una cuenta? <br />{' '}
          <Link to='/register' className='underline'>
            Registrarme
          </Link>
        </p>
      </section>

      <section>
        <h1 className='text-4xl font-bold'>Iniciar sesión</h1>
      </section>

      <section className='flex gap-5 text-white'>
        <div className='flex-1 bg-[#808080] h-[55px] relative rounded-xl'>
          <img
            src={GoogleLogo}
            alt='Google Logo Inicio de sesión'
            className='absolute top-[14px] left-[30px]'
          />
          <button className='w-full h-full'>Iniciar con Google</button>
          {/* TODO: Agregar el ButtonGoogleAuth y ButtonGithubAuth */}
        </div>
        <div className='bg-[#808080] h-[55px] min-w-[60px] rounded-xl'>
          <button className='w-full h-full'>GH</button>
        </div>
      </section>

      <form className='flex flex-col gap-7 w-full'>
        <div className='flex flex-col gap-3'>
          <label htmlFor='email' className='text-md'>
            Ingresa con tu nombre de usuario o correo electrónico
          </label>
          <input
            type='text'
            placeholder='Usuario o correo electrónico'
            id='email'
            className='w-full h-[55px] rounded-lg border border-[#ADADAD] pl-5 placeholder:text-sm'
          />
        </div>

        <div className='flex flex-col gap-3'>
          <label htmlFor='password' className='text-md'>
            Ingresa tu contraseña
          </label>
          <input
            type='password'
            placeholder='Contraseña'
            id='password'
            className='w-full h-[55px] rounded-lg border border-[#ADADAD] pl-5 placeholder:text-sm'
          />
        </div>

        <p className='text-sm underline self-end'>Olvidé mi contraseña</p>

        <button
          type='submit'
          className='min-w-[333px] bg-[#4E5A65] h-[55px] rounded-lg text-white self-center'
        >
          Iniciar sesión
        </button>
      </form>
    </div>
  )
}

export default LoginForm

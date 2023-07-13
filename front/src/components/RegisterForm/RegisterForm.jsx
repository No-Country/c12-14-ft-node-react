import { Link } from 'react-router-dom'

const RegisterForm = () => {
  return (
    <div className='m-5 bg-white w-[539px] p-10 rounded-xl flex flex-col gap-10 formShadow'>
      <section className='flex w-full justify-between'>
        <p className='text-xl font-semibold'>Bienvenido</p>

        <p className='text-sm text-gray-400'>
          Tienes una cuenta? <br />{' '}
          <Link to='/login' className='underline'>
            Iniciar sesión
          </Link>
        </p>
      </section>

      <section>
        <h1 className='text-4xl font-bold'>Registrarme</h1>
      </section>

      <form className='flex flex-col gap-7 w-full'>
        <div className='flex flex-col gap-3'>
          <label htmlFor='email' className='text-md'>
            Ingresa tu correo electrónico
          </label>
          <input
            name='mail'
            type='text'
            placeholder='Correo Electronico'
            id='email'
            className='w-full h-[55px] rounded-lg border border-[#ADADAD] pl-5 placeholder:text-sm'
          />
        </div>

        <div className='flex gap-4'>
          <div className='flex flex-col gap-3'>
            <label htmlFor='username' className='text-md'>
              Tu nombre de usuario
            </label>
            <input
              name='username'
              type='text'
              placeholder='Usuario'
              id='username'
              className='flex-1 min-h-[55px] rounded-lg border border-[#ADADAD] pl-5 placeholder:text-sm'
            />
          </div>

          <div className='flex flex-col gap-3'>
            <label htmlFor='contactNumber' className='text-md'>
              Número de contacto
            </label>
            <input
              name='phonenumber'
              type='text'
              placeholder='Usuario'
              id='contactNumber'
              className='flex-1 min-h-[55px] rounded-lg border border-[#ADADAD] pl-5 placeholder:text-sm'
            />
          </div>
        </div>

        <div className='flex flex-col gap-3'>
          <label htmlFor='password' className='text-md'>
            Ingresa tu contraseña
          </label>
          <input
            name='password'
            type='password'
            placeholder='Contraseña'
            id='password'
            className='w-full h-[55px] rounded-lg border border-[#ADADAD] pl-5 placeholder:text-sm'
          />
        </div>

        <button
          type='submit'
          className='min-w-[333px] bg-[#4E5A65] h-[55px] rounded-lg text-white self-center'
        >
          Registrarme
        </button>
      </form>
    </div>
  )
}

export default RegisterForm

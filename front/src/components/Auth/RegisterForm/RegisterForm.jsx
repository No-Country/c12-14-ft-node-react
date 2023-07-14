import { Link } from 'react-router-dom'
import { RegisterInput } from './RegisterInput'

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
        <RegisterInput
          label='Email'
          name='mail'
          type='email'
          placeholder='Correo electrónico'
        />

        <div className='flex gap-4'>
          <RegisterInput
            label='Tu nombre de usuario'
            name='username'
            type='text'
            placeholder='Usuario'
          />

          <RegisterInput
            label='Número de contacto'
            name='phone'
            type='tel'
            placeholder='Número de contacto'
          />
        </div>

        <RegisterInput
          label='Ingresa una contraseña'
          name='password'
          type='password'
          placeholder='Contraseña'
        />

        <RegisterInput
          label='Repetir contraseña'
          name='confirmPassword'
          type='password'
          placeholder='Repetir contraseña'
        />

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

import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/firebase/firebase.js'
import { RegisterInput } from './RegisterInput'
import { useState } from 'react'

const RegisterForm = () => {
  const [errors, setErrors] = useState({
    mail: '',
    username: '',
    password: '',
  })

  const onSubmit = async (e) => {
    e.preventDefault()
    const { mail, username, password } = e.target.elements

    // TODO: Validar los campos
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        mail.value,
        password.value
      )
      // TODO: Crear el usuario en backend con el id de firebase y el username
      // TODO: Guardar el usuario en el estado global
      // TODO: Redireccionar al usuario a la pagina de inicio
      console.log(userCredentials)
    } catch (error) {
      // TODO: Mostrar el error al usuario en el input
      console.log(error)
    }
  }

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

      <form className='flex flex-col gap-7 w-full' onSubmit={onSubmit}>
        <RegisterInput
          label='Email'
          name='mail'
          type='email'
          placeholder='Correo electrónico'
          errors={errors.mail}
        />

        <div className='flex gap-4'>
          <RegisterInput
            label='Tu nombre de usuario'
            name='username'
            type='text'
            placeholder='Usuario'
            errors={errors.username}
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
          errors={errors.password}
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

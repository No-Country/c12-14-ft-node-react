import { Link, useNavigate } from 'react-router-dom'
import { RegisterInput } from './RegisterInput'
import { useState } from 'react'
import { validateRegister } from '@/libs/validationRegister'
import { uvaApi } from '@/api'
import { setUser } from '@/redux/slices/authSlice'
import { useDispatch } from 'react-redux'

const RegisterForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [errors, setErrors] = useState({
    mail: '',
    userName: '',
    phone: '',
    password: '',
    confirmPassword: '',
  })

  const onSubmit = async (e) => {
    e.preventDefault()
    const { mail, userName, phone, password, confirmPassword } =
      e.target.elements

    // TODO: Validar los campos
    validateRegister(
      {
        mail: mail.value,
        userName: userName.value,
        phone: phone.value,
        password: password.value,
        confirmPassword: confirmPassword.value,
      },
      errors,
      setErrors
    )

    if (
      errors.mail ||
      errors.userName ||
      errors.phone ||
      errors.password ||
      errors.confirmPassword
    ) {
      return
    }

    try {
      const { data } = await uvaApi.post('/auth/register', {
        email: mail.value,
        userName: userName.value,
        phone: phone.value,
        password: password.value,
        password_confirmation: confirmPassword.value,
      })

      dispatch(setUser(data.newUser))
      navigate('/')
    } catch (error) {
      error.response.data.errors.forEach((error) => {
        if (error.msg.includes('email')) {
          setErrors((prev) => ({ ...prev, mail: error.msg }))
        }

        if (error.msg.includes('usuario')) {
          setErrors((prev) => ({
            ...prev,
            userName: error.msg,
          }))
        }
      })
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
            name='userName'
            type='text'
            placeholder='Usuario'
            errors={errors.userName}
          />

          <RegisterInput
            label='Número de contacto'
            name='phone'
            type='tel'
            placeholder='Número de contacto'
            errors={errors.phone}
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
          errors={errors.confirmPassword}
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

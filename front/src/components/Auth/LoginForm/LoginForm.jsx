import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { BsLinkedin } from 'react-icons/bs'
import { useState } from 'react'
import { validateLogin } from '@/libs/validationLogin'
import { uvaApi } from '@/api'
import { useDispatch } from 'react-redux'
import { setUser } from '@/redux/slices/authSlice'

const LoginForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [errors, setErrors] = useState({
    mailOrUserName: '',
    password: '',
  })

  const onSubmit = async (e) => {
    e.preventDefault()

    const { mailOrUserName, password } = e.target.elements

    validateLogin(
      {
        mailOrUserName: mailOrUserName.value,
        password: password.value,
      },
      errors,
      setErrors
    )

    if (errors.mailOrUserName || errors.password) {
      return
    }

    try {
      let loginResponse
      if (mailOrUserName.value.includes('@')) {
        loginResponse = await uvaApi.post('/auth/login', {
          email: mailOrUserName.value,
          userName: '',
          password: password.value,
        })
      } else {
        loginResponse = await uvaApi.post('/auth/login', {
          email: '',
          userName: mailOrUserName.value,
          password: password.value,
        })
      }

      // const verifyResponse = await uvaApi.post('/auth/verify', {
      //   devCollabToken: loginResponse.data.token,
      // })

      dispatch(setUser(loginResponse.data))
      navigate('/')
    } catch (error) {
      if (error.response.data.msg.includes('User')) {
        setErrors({ ...errors, mailOrUserName: error.response.data.msg })
      }
      if (error.response.data.msg.includes('password')) {
        setErrors({ ...errors, password: error.response.data.msg })
      }
    }
  }

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

      <section className='flex gap-5 text-white h-[55px]'>
        <button className='flex-1 bg-[#808080] relative rounded-xl'>
          <FcGoogle className='absolute top-4 left-8 text-2xl' />
          Iniciar con Google
        </button>
        <button className='bg-[#808080] min-w-[60px] rounded-xl flex items-center justify-center'>
          <BsLinkedin className='text-2xl' />
        </button>
        <button className='bg-[#808080] min-w-[60px] rounded-xl'> </button>
      </section>

      <form className='flex flex-col gap-7 w-full' onSubmit={onSubmit}>
        <div className='flex flex-col gap-3'>
          <label htmlFor='email' className='text-md'>
            Ingresa con tu nombre de usuario o correo electrónico
          </label>
          <input
            type='text'
            name='mailOrUserName'
            placeholder='Usuario o correo electrónico'
            className='w-full h-[55px] rounded-lg border border-[#ADADAD] pl-5 placeholder:text-sm'
            onBlur={(e) => {
              validateLogin(
                {
                  mailOrUserName: e.target.value,
                  password: '',
                },
                errors,
                setErrors,
                'mailOrUserName'
              )
            }}
          />
          {errors.mailOrUserName && (
            <p className='text-red-500 text-sm'>{errors.mailOrUserName}</p>
          )}
        </div>

        <div className='flex flex-col gap-3'>
          <label htmlFor='password' className='text-md'>
            Ingresa tu contraseña
          </label>
          <input
            type='password'
            name='password'
            placeholder='Contraseña'
            className='w-full h-[55px] rounded-lg border border-[#ADADAD] pl-5 placeholder:text-sm'
            onBlur={(e) => {
              validateLogin(
                {
                  mailOrUserName: '',
                  password: e.target.value,
                },
                errors,
                setErrors,
                'password'
              )
            }}
          />
          {errors.password && (
            <p className='text-red-500 text-sm'>{errors.password}</p>
          )}
        </div>

        <p className='text-sm underline self-end cursor-pointer'>
          Olvidé mi contraseña
        </p>

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

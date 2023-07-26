import { Link } from 'react-router-dom'
// import { FcGoogle } from 'react-icons/fc'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { useState } from 'react'
import { validateLogin } from '@/libs/validationLogin'
import { uvaApi } from '@/api'
import { useDispatch } from 'react-redux'
import { setUser } from '@/redux/slices/authSlice'

const LoginForm = () => {
  const dispatch = useDispatch()
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

      dispatch(setUser(loginResponse.data))
      window.location.href = '/'
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
    <div className='formShadow flex w-[539px] flex-col gap-10 rounded-xl bg-white p-10 text-primaryDark'>
      <section className='flex w-full justify-between'>
        <p className='text-xl'>Bienvenido</p>

        <p className='text-sm text-gray-400'>
          No tienes una cuenta? <br />{' '}
          <Link to='/register' className='font-semibold underline'>
            Registrarme
          </Link>
        </p>
      </section>

      <section>
        <h1 className='text-4xl font-bold'>Iniciar sesión</h1>
      </section>

      <section className='flex h-[55px] gap-5 font-semibold text-white'>
        <button className='relative flex-1 rounded-xl bg-[#0089ED] drop-shadow-sm'>
          {/* <FcGoogle className='absolute left-8 top-4 text-2xl' /> */}
          Iniciar con Google
        </button>
        <button className='flex min-w-[60px] items-center justify-center rounded-xl border border-[#0089ED] drop-shadow-sm'>
          <BsLinkedin className='text-2xl text-[#0089ED]' />
        </button>
        <button className='flex min-w-[60px] items-center justify-center rounded-xl border border-black drop-shadow-sm'>
          <BsGithub className='text-2xl text-black' />
        </button>
      </section>

      <form className='flex w-full flex-col gap-7' onSubmit={onSubmit}>
        <div className='flex flex-col gap-3'>
          <label htmlFor='email' className='text-md'>
            Ingresa con tu nombre de usuario o correo electrónico
          </label>
          <input
            type='text'
            name='mailOrUserName'
            placeholder='Usuario o correo electrónico'
            className='h-[55px] w-full rounded-lg border border-[#ADADAD] pl-5 outline-primary placeholder:text-sm'
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
            <p className='text-sm text-red-500'>{errors.mailOrUserName}</p>
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
            className='h-[55px] w-full rounded-lg border border-[#ADADAD] pl-5 outline-primary placeholder:text-sm'
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
            <p className='text-sm text-red-500'>{errors.password}</p>
          )}
        </div>

        <p className='cursor-pointer self-end text-sm font-bold underline'>
          Olvidé mi contraseña
        </p>

        <button
          type='submit'
          className='h-12 w-5/6 self-center rounded-lg bg-primary text-lg font-semibold text-white'
        >
          Iniciar sesión
        </button>
      </form>
    </div>
  )
}

export default LoginForm

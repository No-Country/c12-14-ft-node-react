// import LoginAs from '@/components/Auth/LoginAs/LoginAs'
import LoginForm from '@/components/Auth/LoginForm/LoginForm'
import AuthBG from '@/assets/images/authBg.svg'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <main className='relative flex h-screen flex-col'>
      <div className='absolute right-40 flex h-screen items-center'>
        <LoginForm />
      </div>

      <section className='relative -z-10 flex flex-1 select-none flex-col justify-evenly px-20'>
        <img
          src={AuthBG}
          alt='authBg'
          className='absolute left-0 top-0 h-full w-full object-cover object-left'
          draggable={false}
        />
      </section>
      <Link
        to='/'
        className='absolute left-12 top-8 z-50 h-28 w-60 cursor-pointer'
      />
      <section className='flex flex-1 items-center gap-4 bg-white pl-20'>
        {/* <LoginAs />
        <LoginAs /> */}
      </section>
    </main>
  )
}

export default Login

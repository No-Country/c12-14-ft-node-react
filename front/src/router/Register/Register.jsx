import RegisterForm from '@/components/Auth/RegisterForm/RegisterForm'
import AuthBG from '@/assets/authBg.svg'

const Login = () => {
  return (
    <main className='relative flex h-screen flex-col font-bold text-primaryDark'>
      <div className='absolute right-40 flex h-screen items-center'>
        <RegisterForm />
      </div>

      <section className='relative -z-10 flex flex-1 flex-col justify-evenly px-20'>
        <img
          src={AuthBG}
          alt='authBg'
          className='absolute left-0 top-0 h-full w-full object-cover object-left'
        />
      </section>
      <section className='flex flex-1 items-center gap-4 bg-white pl-20'></section>
    </main>
  )
}

export default Login

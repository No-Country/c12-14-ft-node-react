import LoginAs from '@/components/LoginAs/LoginAs'
import LoginForm from '@/components/LoginForm/LoginForm'

const Login = () => {
  return (
    <main className='relative h-screen flex flex-col'>
      <div className='absolute right-20 top-[calc(50%-340px)]'>
        <LoginForm />
      </div>

      <section className='flex-1 bg-[#959697] flex flex-col justify-evenly px-20'>
        <div className=''>
          <p className='text-white text-2xl font-semibold'>Logo</p>
        </div>
        <div className='flex flex-col gap-4 text-white pl-10'>
          <h1 className='font-semibold text-[34px]'>Sign in to</h1>
          <p className='text-[24px]'>Lorem Ipsum is simply</p>
          <p className='text-[14px] max-w-[315px] font-light'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s,
          </p>
        </div>
      </section>
      <section className='flex-1 bg-white flex items-center pl-20 gap-4'>
        <LoginAs />
        <LoginAs />
      </section>
    </main>
  )
}

export default Login

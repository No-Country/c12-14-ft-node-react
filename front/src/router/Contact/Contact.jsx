import contactBg from '@/assets/images/contactBg.png'
import doubleCircle from '@/assets/images/doubleCircle.png'
import backLeft from '@/assets/images/backLeft.png'
import backRight from '@/assets/images/backRight.png'
import Swal from 'sweetalert2'

const Contact = () => {
  return (
    <div className='z-10 flex h-[800px] w-screen items-center justify-center bg-[#FAFAFA]'>
      <div className='relative flex h-[625px] w-[1120px] rounded-lg rounded-bl-[100px] bg-[#FDFCFF] shadow-lg'>
        <div className='flex w-2/3 flex-col items-center justify-center p-8'>
          <p className='text-center text-xl font-extrabold text-primaryDark'>
            El poder de la colaboración es extraordinario. ¡Hablemos pronto y
            exploremos juntos el emocionante camino del trabajo en equipo!
          </p>
          <form
            className='flex w-full flex-col items-center justify-center gap-8 pt-12'
            onSubmit={(e) => {
              e.preventDefault()
              Swal.fire({
                icon: 'success',
                title: '¡Gracias por tu mensaje!',
                text: 'En breve nos pondremos en contacto contigo.',
                confirmButtonText: 'Cerrar',
              })
            }}
          >
            <input
              type='text'
              className='w-full rounded-md border py-4 pl-6 text-sm outline-primary'
              placeholder='Tu nombre'
            />
            <input
              type='text'
              className='w-full rounded-md border py-4 pl-6 text-sm outline-primary'
              placeholder='Correo electrónico'
            />
            <textarea
              className='h-36 w-full rounded-md border py-4 pl-6 text-sm outline-primary'
              placeholder='Puedes redactar tu mensaje aquí'
            />
            <button className='w-2/3 rounded-md bg-primary py-3 font-bold uppercase text-white'>
              Enviar Mensaje
            </button>
          </form>
        </div>
        <div>
          <img src={contactBg} alt='hand with phone' className='h-full' />
        </div>
        {/* Double circles */}
        <img
          src={doubleCircle}
          className='absolute -left-3 -top-6'
          alt='double circle'
        />
        <img
          src={doubleCircle}
          className='absolute -bottom-8 -left-3'
          alt='double circle'
        />
        <img
          src={doubleCircle}
          className='absolute -top-16 right-52'
          alt='double circle'
        />
        <img
          src={doubleCircle}
          className='absolute -bottom-16 right-52'
          alt='double circle'
        />
        {/* Back boxes */}
        <img
          src={backLeft}
          className='absolute -left-12 bottom-4 -z-10'
          alt='double circle'
        />
        <img
          src={backRight}
          className='absolute -bottom-16 -right-9 -z-10'
          alt='double circle'
        />
      </div>
    </div>
  )
}

export default Contact

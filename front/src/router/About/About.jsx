import { FaSquareGithub, FaLinkedin } from 'react-icons/fa6'
import { RiPagesLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import facundo from '@/assets/images/facundo.png'
import jeffer from '@/assets/images/jeffer.png'
import luis from '@/assets/images/luis.png'
import gabriela from '@/assets/images/gabriela.png'
import saul from '@/assets/images/saul.png'
import argentina from '@/assets/images/argentina.png'
import colombia from '@/assets/images/colombia.png'
import mexico from '@/assets/images/mexico.png'
import salvador from '@/assets/images/salvador.png'
import italy from '@/assets/images/italy.png'

const Member = (member) => {
  return (
    <div className=' flex flex-col items-center gap-3 rounded-xl bg-white p-5 shadow-xl'>
      <img src={member.info.photo} alt={member.info.name} />
      <h2 className=' font-bold text-primaryDark'>
        <b>{member.info.name}</b>
      </h2>
      <div className='flex gap-2'>
        {member.info.nationality && (
          <img src={member.info.nationality} alt='soy' />
        )}
        <img src={member.info.ubication} alt='ubicacion' />
      </div>
      <h3>{member.info.rol}</h3>
      <div className='flex gap-2'>
        {member.info?.github && (
          <Link to={member.info.github} target='__blank'>
            <FaSquareGithub size={20} className='hover:text-primary' />
          </Link>
        )}
        {member.info?.portfolio && (
          <Link to={member.info.portfolio} target='__blank'>
            <RiPagesLine size={20} className='hover:text-primary' />
          </Link>
        )}
        <Link to={member.info.linkedin} target='__blank'>
          <FaLinkedin size={20} className='hover:text-primary' />
        </Link>
      </div>
    </div>
  )
}

const members = [
  {
    id: 5,
    photo: facundo,
    name: 'Facundo Castellano',
    rol: 'Backend Developer',
    github: 'https://github.com/FacuCastellano',
    linkedin: 'https://www.linkedin.com/in/facundo-castellano-34798135/',
    ubication: argentina,
  },
  {
    id: 2,
    photo: gabriela,
    name: 'Gabriela Salazar',
    rol: 'UX/UI Designer',
    github: '',
    portfolio: 'https://gabrielasalazar299.wixsite.com/gabriela-salazar',
    linkedin: 'https://www.linkedin.com/in/gsalazarc/',
    ubication: italy,
    nationality: salvador,
  },
  {
    id: 1,
    photo: jeffer,
    name: 'Jefferson Steven',
    rol: 'Frontend Developer',
    github: 'https://github.com/Jefersonsteven',
    linkedin: 'https://www.linkedin.com/in/jeffersonsteven/',
    ubication: colombia,
  },
  {
    id: 3,
    photo: luis,
    name: 'Luis Osio Chico',
    rol: 'Frontend Developer',
    github: 'https://github.com/LOsioChico',
    linkedin: 'https://www.linkedin.com/in/losiochico/',
    ubication: colombia,
  },
  {
    id: 4,
    photo: saul,
    name: 'Saul Zamora',
    rol: 'Backend Developer',
    github: 'https://github.com/G-zeus',
    linkedin: 'https://www.linkedin.com/in/szamorasoft/',
    ubication: mexico,
  },
]

function About() {
  return (
    <main className='flex max-w-6xl flex-col items-center justify-around gap-28 py-24'>
      <section>
        <div className=' flex flex-col gap-1'>
          <div className=' h-1 w-1/2 rounded-md bg-[#4285F4]'></div>
          <div className=' h-2 w-1/2 rounded-md bg-[#4285F4]'></div>
        </div>
        <h1 className=' text-3xl font-bold'>Nuestro Equipo</h1>
      </section>
      <section className='flex gap-2'>
        {members.map((member) => (
          <Member key={member.id} info={member} />
        ))}
      </section>
      <section>
        <article className='flex flex-col gap-10 rounded-xl bg-white p-10 shadow-2xl'>
          <h2 className=' text-2xl font-bold text-primaryDark'>
            Acerca de nosotros
          </h2>
          <p className=' text-xl'>
            Con nuestro equipo lleno de talentos y habilidades diferentes
            decidimos fusionar nuestras ideas y hacer de la colaboración y el
            trabajo en equipo el nucleo de nuestro proyecto.
            <br />
            <br />
            La colaboración fue la piedra angular del proceso de desarrollo de
            este proyecto. Desde el inicio, fomentamos un ambiente inclusivo y
            de apoyo, donde se valora y respeta la opinión de cada uno de
            nosotros y valoramos el intercambio de conocimientos y experiencias,
            lo que nos permitió aprender y crecer como individuos y como equipo
            <br />
            <br />
            Nuestro compromiso con el trabajo en equipo es lo que impulsa
            nuestro proyecto hacia adelante. Estamos emocionados de continuar
            colaborando, creando y superando límites mientras nos aventuramos
            hacia un futuro más brillante y prometedor. ¡Bienvenido y bienvenida
            a <b className=' text-primary'>UVA</b>, donde la unión, la
            tecnología y la colaboración dan forma a nuestras ideas y nos
            conducen hacia el éxito compartido!.
          </p>
        </article>
      </section>
    </main>
  )
}

export default About

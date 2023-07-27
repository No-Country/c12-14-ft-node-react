import { FaSquareGithub, FaLinkedin } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Member = ({ member }) => {
  return (
    <div>
      <img src={member.photo} alt={member.name} />
      <h2>{member.name}</h2>
      <h3>{member.rol}</h3>
      <div>
        <Link to={member.github} target='__blank'>
          <FaSquareGithub />
        </Link>
        <Link to={member.github} target='__blank'>
          <FaLinkedin />
        </Link>
      </div>
    </div>
  )
}

const members = [
  {
    id: 1,
    photo: '@/assets/gabriela.png',
    name: 'Gabriela Salazar',
    rol: 'UX|UI Designer',
    github: '',
    linkedin: '',
  },
]

function About() {
  return (
    <main>
      <section>
        <div className=' h-5 w-1/2 bg-[#4285F4]'></div>
        <h1>Nuestro Equipo</h1>
        <div className=' h-5 w-1/2 bg-[#4285F4]'></div>
      </section>
      <section>
        {members.map((member) => (
          <Member key={member.id} info={member} />
        ))}
      </section>
      <section></section>
    </main>
  )
}

export default About

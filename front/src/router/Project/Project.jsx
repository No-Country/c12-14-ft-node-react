import { useParams } from 'react-router-dom'
function Project() {
  const { id } = useParams()
  return (
    <div>
      <h1>Proyecto: {id}</h1>
    </div>
  )
}

export default Project

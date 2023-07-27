import { useNavigate } from 'react-router-dom'
function CardMiniProject({ project }) {
  const navigate = useNavigate()
  function handleClick() {
    return navigate(`/project/${project._id}`)
  }
  return (
    <div className='flex flex-col gap-5 rounded-2xl bg-white p-5 capitalize text-black'>
      <div className='flex justify-between gap-1'>
        <h4 className='textwrap cursor-pointer' onClick={handleClick}>
          {project.title}
        </h4>
        <div className='flex min-w-[60%] items-center justify-end gap-2'>
          <div className=' h-2 w-2 rounded-full bg-[green]'></div>
          <p className=' text-right'>{project.status}</p>
        </div>
      </div>
      <p className=' textwrap w-3/4'>{project.description}</p>
      <div className='flex items-center gap-2 font-bold text-[#0089ED]'>
        <div className=' h-4 w-4 rounded-full bg-[#0089ED]'></div>
        <p>{project.category}</p>
      </div>
    </div>
  )
}

export default CardMiniProject

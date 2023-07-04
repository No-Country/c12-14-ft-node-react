function CardMiniProject({ project }) {
  return (
    <div className='flex flex-col gap-5 p-5 bg-white text-black'>
      <div className='flex justify-between'>
        <h4 className='text-2xl'>{project.title}</h4>
        <div className='flex justify-between gap-2 items-center'>
          <div className=' w-2 h-2 bg-green-400'></div>
          <p>{project.status}</p>
        </div>
      </div>
      <p className=' w-3/4'>{project.description}</p>
      <div className='flex gap-2 items-center'>
        <div className=' w-8 h-8 rounded-full bg-gray-500'></div>
        <p>{project.category}</p>
      </div>
    </div>
  )
}

export default CardMiniProject
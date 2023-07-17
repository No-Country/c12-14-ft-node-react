import { useState } from 'react'

function SearchBar() {
  const [search, setSearch] = useState('')
  const [type, setType] = useState('projects')

  const handleInput = (e) => {
    setSearch(e.target.value)
  }

  const handleSearch = (e) => {
    if (search.length > 0 && e.keyCode === 13) {
      console.log(search)
    }
  }

  const handleType = (e) => {
    setType(e.target.value)
  }

  return (
    <div className='flex w-1/2 justify-center max-w-screen-lg rounded-full border-2 border-primary p-2'>
      <input
        value={search}
        className=' w-full bg-transparent h-10 px-10 pr-16 text-xl focus:outline-none '
        type='text'
        placeholder='Buscar . . .'
        onKeyDown={handleSearch}
        onChange={handleInput}
      />
      <select
        className='text-xl w-1/4 h-10 px-4 focus:outline-none border-l-2 border-l-primary text-primary font-bold'
        onChange={handleType}
        value={type}
      >
        <option value='projects'>Projects</option>
        <option value='tecnologies'>Tecnologies</option>
        <option value='categories'>Categories</option>
      </select>
    </div>
  )
}

export default SearchBar

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
    <div className='flex w-1/2 max-w-screen-lg justify-center rounded-full border-2 border-primary p-2'>
      <input
        value={search}
        className=' h-10 w-full bg-transparent px-10 pr-16 text-xl focus:outline-none '
        type='text'
        placeholder='Buscar . . .'
        onKeyDown={handleSearch}
        onChange={handleInput}
      />
      <select
        className='h-10 w-1/4 border-l-2 border-l-primary px-4 text-xl font-bold text-primary focus:outline-none'
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

import { useState } from 'react'

function SearchBar() {
  const [search, setSearch] = useState('')

  const handleInput = (e) => {
    setSearch(e.target.value)
  }

  const handleSearch = (e) => {
    if (search.length > 0 && e.keyCode === 13) {
      console.log(search)
    }
  }

  return (
    <div className='flex w-full justify-center max-w-screen-lg'>
      <input
        value={search}
        className=' w-1/2 border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-l-2xl text-sm focus:outline-none '
        type='text'
        placeholder='Search . . .'
        onKeyDown={handleSearch}
        onChange={handleInput}
      />
      <select className='w-1/4 h-10 rounded-r-2xl px-4 border-2 border-gray-300'>
        <option value='projects'>Projects</option>
        <option value='tecnologies'>Tecnologies</option>
        <option value='categories'>Categories</option>
      </select>
    </div>
  )
}

export default SearchBar

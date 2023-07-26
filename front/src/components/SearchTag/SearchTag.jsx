import { useState } from 'react'
import validateProject from '@/libs/validationProject'

function SearchTag({ data, datastate, setDatastate, errors, setErrors }) {
  const [result, setResult] = useState('')
  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
    const search = e.target.value
    setSearch(search)
    if (search !== '') {
      const result = data.filter((tag) => {
        return tag.stackName.toLowerCase().includes(search.toLowerCase())
      })
      setResult(result)
    } else {
      setResult('')
    }
  }

  const handleSelect = (e) => {
    const id = e.target.id
    const stackName = e.target.innerText
    setDatastate({
      ...datastate,
      technologies: [...datastate.technologies, { id, stackName }],
    })
    setResult('')
    setSearch('')

    if (errors) {
      validateProject(
        {
          ...datastate,
          technologies: [...datastate.technologies, { id, stackName }],
        },
        errors,
        setErrors
      )
    }
  }

  return (
    <div className='relative'>
      <input
        className={`border-2 border-[#6CB5FF] focus-visible:outline-0 ${
          result !== '' ? ' rounded-t-lg' : 'rounded-lg'
        } h-14 w-full p-8 `}
        type='search'
        placeholder='Ej: react.js'
        onChange={handleSearch}
        value={search}
      />

      <div
        className={
          result !== ''
            ? 'top-17 absolute w-full rounded-b-md border-2 border-[#6CB5FF] bg-slate-300 p-4'
            : ''
        }
      >
        {result !== '' &&
          result.length > 0 &&
          result.map((tag) => {
            return (
              <div
                key={tag._id}
                className='w-1/3 cursor-pointer rounded-lg bg-[#6CB5FF]'
              >
                <p
                  className='flex justify-center font-bold'
                  onClick={handleSelect}
                  id={tag._id}
                  name={tag.stackName}
                >
                  {tag.stackName}
                </p>
              </div>
            )
          })}
        {result !== '' && result.length === 0 && <p>No hay resultados</p>}
      </div>
    </div>
  )
}

export default SearchTag

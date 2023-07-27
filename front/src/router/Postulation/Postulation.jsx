import { useState } from 'react'

function Postulation() {
  const roles = []

  // * states

  const [rol, setRol] = useState({
    name: '',
    senority: '',
  })

  const [rolError, setRolError] = useState('')

  // * handlers

  const handleInput = (e) => {
    const value = e.target.value
    setRol({
      name: value,
      senority: 'value',
    })

    if (rol.name && rol.senority) {
      setRolError('Escoge un Rol')
    } else {
      setRolError('')
    }
  }

  const handleSend = (e) => {
    e.preventDefault()
    console.log(rol)
  }

  // * -----------------------------//

  return (
    <form className='container flex flex-col gap-5'>
      {/* // category */}
      <div className='flex flex-col gap-2'>
        <label className=' font-bold  text-primary'>Roles Disponibles</label>
        <select
          className='h-14 w-full rounded-lg border-2 p-2'
          name='roles'
          onChange={handleInput}
        >
          <option value=''>Selecciona un rol</option>
          {roles.length > 0 &&
            roles.map((rol) => {
              return (
                <option key={rol._id} id={rol._id} value={rol.rolName}>
                  {rol.rolName}
                </option>
              )
            })}
        </select>
        <span className='text-red-500'>{rolError}</span>
      </div>

      {/* button */}
      <div className='flex justify-end gap-5'>
        <button
          onClick={handleSend}
          className=' rounded-md  bg-[#DADADA] px-6 py-4 font-bold text-[#35414B] hover:bg-[#9f9f9f] hover:text-[#111417]'
        >
          ENVIAR
        </button>
      </div>
    </form>
  )
}

export default Postulation

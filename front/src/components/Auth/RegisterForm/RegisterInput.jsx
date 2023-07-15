export const RegisterInput = ({ name, type, placeholder, label, errors }) => {
  return (
    <div className='flex flex-col gap-3'>
      <label htmlFor={name} className='text-md font-medium'>
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className='w-full h-[55px] rounded-lg border border-[#ADADAD] pl-5 placeholder:text-sm'
      />
      {errors && <p className='text-red-500 text-sm'>{errors}</p>}
    </div>
  )
}

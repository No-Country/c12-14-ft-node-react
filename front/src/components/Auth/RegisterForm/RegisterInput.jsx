export const RegisterInput = ({ name, type, placeholder, label, errors }) => {
  return (
    <div className='flex w-full flex-col gap-3'>
      <label htmlFor={name} className='text-md font-medium'>
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className='h-[55px] rounded-lg border border-[#ADADAD] pl-5 font-normal outline-primary transition-all duration-300 placeholder:text-sm'
      />
      {errors && <p className='text-sm text-red-500'>{errors}</p>}
    </div>
  )
}

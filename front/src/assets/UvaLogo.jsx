import { useNavigate } from 'react-router-dom'

const SvgComponent = (props) => {
  const navigate = useNavigate()
  const handle = () => {
    navigate('/')
  }
  return (
    <svg
      className='cursor-pointer'
      onClick={handle}
      xmlns='http://www.w3.org/2000/svg'
      width={props.width || 160}
      height={props.height || 60}
      fill='none'
      {...props}
    >
      <path
        fill='#5526B3'
        d='m145.89 47.165 27.19-11.03-27.19-12.39v-13l44.31 22.15v7.53l-44.31 19.66v-12.92ZM54.31 23.655l-27.19 11.03 27.19 12.39v13L10 37.925v-7.53l44.31-19.66v12.92ZM121.77 13.405v29.61c0 4.13-.79 7.71-2.36 10.75-1.57 3.04-3.93 5.38-7.07 7.03-3.14 1.65-7.08 2.47-11.81 2.47-6.77 0-11.94-1.74-15.51-5.22-3.57-3.48-5.35-8.39-5.35-14.74v-29.91h13.36v28.87c0 3.48.65 6 1.95 7.57 1.3 1.57 3.22 2.36 5.75 2.36 1.82 0 3.3-.34 4.44-1.03 1.14-.68 1.98-1.77 2.51-3.25.53-1.48.79-3.39.79-5.72v-28.8h13.29l.01.01Z'
      />
    </svg>
  )
}
export default SvgComponent

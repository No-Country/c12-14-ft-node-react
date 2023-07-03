import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '@/redux/reducers/counter'

function App() {
  const dispatch = useDispatch()
  const { count } = useSelector((state) => state.counter)

  const handleClick = (e) => {
    if (e.target.value === '+') {
      dispatch(increment(10))
    } else {
      if (count > 0) {
        dispatch(decrement())
      }
    }
  }

  return (
    <div className='flex items-center justify-center h-screen bg-neutral-200'>
      <h1 className='text-4xl font-bold text-neutral-900'>Hello World</h1>
      <span>{count}</span>
      <div>
        {' '}
        <button onClick={handleClick} value='+'>
          ➕
        </button>
        <button onClick={handleClick} value='-'>
          ➖
        </button>
      </div>
    </div>
  )
}

export default App

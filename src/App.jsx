import React, {useState} from 'react'
import {Counter} from './component/Counter.jsx';
import {Stats} from './component/Stats.jsx';

export const App = () => {
  const initialCounters = [
    {
      id: 1,
      value: 0
    },
    {
      id: 2,
      value: 0
    }
  ]
  const [counters, setCounters] = useState(initialCounters)
  const handleIncrement = counterId => {
    const updatedCounters = counters.map(counter => {
      if (counter.id === counterId) {
        return {
          ...counter,
          value: counter.value + 1
        }
      }
      return counter
    })
    setCounters(updatedCounters)
  }
  const handleDecrement = counterId => {
    const updatedCounters = counters.map(counter => {
      if (counter.id === counterId) {
        return {
          ...counter,
          value: counter.value - 1
        }
      }
      return counter
    })
    setCounters(updatedCounters)
  }
  return (
    <div className='w-screen h-screen p-10 bg-gray-100 text-slate-700'>
      <h1 className='max-w-md mx-auto text-center text-2xl font-bold'>Simple Counter App</h1>
      <div className='max-w-md mx-auto mt-10 space-y-5'>
        {
          counters.map(counter => <Counter
            count={counter.value}
            key={counter.id}
            onIncrement={() => handleIncrement(counter.id)}
            onDecrement={() => handleDecrement(counter.id)}
          />)
        }
        <Stats totalCount={10} />
      </div>
    </div>
  )
}

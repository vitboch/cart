import React, { useState } from 'react'
import Counter from './counter'

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: 'Useless thing' },
    { id: 1, value: 4, name: 'Spoon' },
    { id: 2, value: 0, name: 'Fork' },
    { id: 3, value: 0, name: 'Plate' },
    { id: 4, value: 0, name: 'Minimalist set' },
  ]
  const [counters, setCounters] = useState(initialState)
  const handleDelete = id => {
    const newCounters = counters.filter(c => c.id !== id)
    setCounters(newCounters)
  }
  const handleReset = () => {
    setCounters(initialState)
  }
  const handleIncrement = id => {
    const newCounters = counters.map(counter => {
      if (counter.id === id) {
        counter.value += 1
      }
      return counter
    })
    setCounters(newCounters)
  }
  const handleDecrement = id => {
    const newCounters = counters.map(counter => {
      if (counter.id === id) {
        counter.value -= 1
      }
      return counter
    })
    setCounters(newCounters)
  }

  return (
    <>
      {counters.map(count => (
        <Counter key={count.id} onDelete={handleDelete} onIncrement={handleIncrement}
                 onDecrement={handleDecrement} {...count} />
      ))}
      <button
        className='btn btn-primary btn-sm m-2'
        onClick={handleReset}
      >
        Reset
      </button>
    </>
  )
}

export default CountersList
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment , Reset ,incrementByAmount } from './features/counter/counter'
import TodoApp from './component/todo'

function App() {
  const [ number , setNumber] = useState(0)
 const count = useSelector((state)=>state.counter.value)
 const disptach = useDispatch()
  // Function to handle decrement
  const handleDecrement = () => {
    disptach(increment())
  }

  // Function to handle increment
  const handleIncrement = () => {
    // Logic for increment
    disptach(decrement())
  }

  const reset = () => {
    // Logic for increment
    disptach(Reset())
  }

  const Val = (value) => {
    // Logic for increment
    disptach(incrementByAmount({payload:value}))
  }


  return (
    <>
   
      <TodoApp/>
    </>
  )
}

export default App

import React from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  return (
    <>
      <div className='h-screen w-full'>
        <AddTodo />
        <Todos />
      </div>
    </>
  )
}

export default App
import React from 'react'
import TaskInput from './components/TaskInput'
import { Route, Routes } from 'react-router-dom'
import TaskList from './pages/TaskList'
import Edit from './components/Edit'

const App = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<TaskInput />} />
        <Route path='/alltask' element={<TaskList />} />
        {/* <Route path='/alltask/:id' element={<TaskList />} /> */}
        <Route path='/edit/:id' element={<Edit />} />
      </Routes>
      
    </div>
  )
}

export default App
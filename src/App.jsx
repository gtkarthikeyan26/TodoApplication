import React from 'react'
import { BrowserRouter ,Routes , Route } from 'react-router-dom';
import TodoList from './components/TodoList';
import CreateTodo from './components/CreateTodo';
import { ToastContainer } from 'react-toastify'


export default function App() {
  return (
  <>
  <BrowserRouter basename="/TodoApplication">
    <Routes>
      <Route path='/' element={<TodoList />}></Route>
      <Route path='/create' element={<CreateTodo/>}></Route>
      <Route path="/create/:id" element={<CreateTodo />} />
    </Routes>
  </BrowserRouter>
  <ToastContainer />
  </>
  )
}
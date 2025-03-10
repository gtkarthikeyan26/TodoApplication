import React from 'react'
import { Router ,Routes , Route } from 'react-router-dom';
import Todo from './components/Todo';


export default function App() {
  return (
  <>
    <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  <Todo />
  </>
  )
}

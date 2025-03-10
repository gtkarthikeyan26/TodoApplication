import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom'

export default function TodoList() {
    const [todos, setTodods] = useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos",{
            method:"GET",
            header:{
                "Content-type":"application/json"
            }
        }).then((response)=>{
            response.json().then((data)=>{
                setTodods(data)
            })
        })
    },[])
  return (
    <div>TodoList</div>
  )
}

import React, { useEffect, useState } from 'react'

const FetchAPI = () => {

    const [todos, setTodos] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            setTodos(data)
        })
    }, [])


  return (
    <div>
        <h1>Data Fetcing - Todos</h1>

        {
           todos && todos.map((todo) => {
                return <div>
                    <h2 key={todo.id}> Title: {todo.title}</h2>
                    
                    <p>Description: {todo.body}</p>
                </div> 
    
                
            })
        }

    </div>
  )
}

export default FetchAPI
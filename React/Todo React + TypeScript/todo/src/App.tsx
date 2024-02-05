import { ChangeEvent, useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'

export type Todo = {
  id: number ,
  title: string,
  completed: boolean
}

function App() {
  const [ todoInput , setTodoInput ] = useState('')
  const [ todos , setTodos ] = useState<Todo[]>(() => {
    const storedTodos = localStorage.getItem('@Leo: todos')
    
    if ( storedTodos ){
      return JSON.parse(storedTodos)
    }
    return []
  })

  useEffect( () => {
    localStorage.setItem('@Leo: todos' , JSON.stringify( todos ))

  },[ todos ])

  function handleAddTodoo(){

    if( !todoInput ) return;

    setTodos( ( previousTodos ) => [ ...previousTodos , {id: Math.random() , title: todoInput , completed: false} ])

    setTodoInput('')
  }

  function CompleteTodo( id:number ){
    setTodos( ( previousTodos ) => previousTodos.map( ( item ) => item.id != id ? item : {...item , completed: !item.completed}))
  }

  function deleteTodo( id:number ){
    setTodos( ( previousTodos ) => previousTodos.filter( ( item ) => item.id != id ))
  }

  return (
    <div>
      <div className='add-todo'>
        <input type="text" placeholder='Fazer café' onChange={ ( e: ChangeEvent<HTMLInputElement> ) => setTodoInput( e.target.value ) } value={ todoInput }/>
        <button onClick={ handleAddTodoo }>Adicionar</button>
      </div>

      { todos.map( ( item ) => ( 
        <Card key={ item.id } todo={ item } CompleteTodo={CompleteTodo} deleteTodo={ deleteTodo }/>
      ))}

    </div>
  )
}

export default App

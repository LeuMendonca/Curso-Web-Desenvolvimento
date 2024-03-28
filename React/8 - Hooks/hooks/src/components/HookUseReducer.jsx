import React, { useEffect, useReducer, useState } from 'react'
import { Link } from 'react-router-dom'

export function HookUseReducer() {
  
  const [ number , dispatch ] = useReducer((state , action) => {
    return state + 1
  },0)

  // Avançando no useReducer

  const inititalTasks = [
    {id: 1 , text: "Fazer algo"},
  ]

  const [ taskText , setTaskText ] = useState("")
  const [ tasks , dispatchTasks ] = useReducer(taskReducer , inititalTasks)

  function taskReducer( state , action ){
    switch( action.Type) {
      case 'ADD':
        const newTask = {
          id: Math.random(),
          text: taskText
        }

        setTaskText("")

        return [...state , newTask]

      case 'DELETE':
        return state.filter((task) => task.id !== action.id)

      default:
        return state
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    dispatchTasks({Type: "ADD"})
  }

  function deleteTask(id){
    dispatchTasks({Type: 'DELETE' , id})
  }
  
  return (
    <div>
      <h2>useReducer</h2>
      <p>Número: { number }</p>
      <button onClick={dispatch}>Alterar</button>

      <hr />

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Digite a tarefa' value={taskText} onChange={(e) => setTaskText( e.target.value )} />
        <br />
        <button>Enviar</button>

        <br /><br />
        <h3>Tarefas</h3>

        <ul>
          { tasks.map( task => <li onDoubleClick={() => deleteTask(task.id)}>{task.text}</li>)}
        </ul>

      </form>
    </div>
  )
}

import { Todo } from '../App';
import './Card.css'

type CardProps = {
    todo: Todo;
    CompleteTodo: (id:number) => void
    deleteTodo: ( id:number ) => void
}


export default function Card( { todo , CompleteTodo , deleteTodo }:CardProps ) {

    function handleCompleteTodo(){
        CompleteTodo( todo.id );
    }

    function handleDeleteTodo(){
        deleteTodo( todo.id );
    }

  return (
    <div className={`card ${ todo.completed ? 'done' : '' }`}>
        <h2>{ todo.title }</h2>

        <div className="card-buttons">
            <button onClick={ handleCompleteTodo }>{ todo.completed ? 'Retomar' : 'Completar' }</button>
            <button onClick={ handleDeleteTodo }>Deletar</button>
        </div>
    </div>
  )
}

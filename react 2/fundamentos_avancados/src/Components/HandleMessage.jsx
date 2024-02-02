function HandleMessage( { ChangeMessage }) {

    const mensagens = ["Oi" , "Ola" , "Tudo bem ?"]

  return (
    <div>
        <button onClick={ () => ChangeMessage( mensagens[0] ) }>1</button>
        <button onClick={ () => ChangeMessage( mensagens[1] ) }>2</button>
        <button onClick={ () => ChangeMessage( mensagens[2] ) }>3</button>
    </div>
  )
}

export default HandleMessage
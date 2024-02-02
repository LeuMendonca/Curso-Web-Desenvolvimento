function Events() {

    const imprimeConsole = ( ) => {
        console.log( "Testando o teste" )
    }

    const renderSomething = ( x ) => {
        if (x){
            return <h1>Renderizou algo</h1>
        }
        return <h1>Não renderizou nada</h1>
    }

  return (
    <div>
        <div>
            <button onClick={ imprimeConsole }>
                Clique aqui!
            </button>

            { renderSomething(true) }
            { renderSomething(false) }
        </div>
    </div>
  )
}

export default Events
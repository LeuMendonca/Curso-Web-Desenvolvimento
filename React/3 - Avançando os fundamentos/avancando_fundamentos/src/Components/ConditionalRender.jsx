export function ConditionalRender() {

    const x = true
    const numberInicial = 20

  return (
    <div>
        <h3>Isso será exibido ?</h3>
        {
            x &&  (
                <h1>Se x for true , sim !</h1> 
            )
        }

        <h3>Agora é com ternario:</h3>
        {
            numberInicial > 10 ? <h1>Sim senhor</h1>  : <h1>Não senhor</h1>
        }
    </div>
  )
}
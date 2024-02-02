function Container( { children } ) {
  return (
    <div className="container">
        <h1>Conteudo do componente pai:</h1>
        { children }
    </div>
  )
}

export default Container
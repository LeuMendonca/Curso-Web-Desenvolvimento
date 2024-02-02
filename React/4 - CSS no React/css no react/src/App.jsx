import './App.css'
import MyComponents from './Components/MyComponents'
import Title from './Components/Title'



function App() {

    {/* 4 - Inline style dinamico */}
    const x = 15

    {/* 5 - Classe dinamica */}
    const btnCondition = 10

  return (
    <>
      {/* 1 - CSS Global */}
    <h1>CSS no React</h1>

    {/* 2 - css de componente */}
    <MyComponents/>
    <p>Outro paragrafo</p>

    {/* 3 - Inline style */}
    <p style={ { color: "red" , padding: "25px" , backgroundColor: "#CCC"} }>Este elemento tem estilos inline</p>

    {/* 4 - Inline style dinamico */}
    <h2 style={ x > 5 ? { color: "orangered" } : { color: "green" } }>CSS Dinamico</h2>
    <h2 style={ x < 5 ? { color: "orangered" } : { color: "green" } }>CSS Dinamico 2</h2>

    {/* 5 - Classe dinamica */}
    <div className={ btnCondition > 15 ? "flex" : "block" }>
      <button>Botão 1</button>
      <button>Botão 2</button>
    </div>

    <Title/>
    </>
  )

  
}

export default App

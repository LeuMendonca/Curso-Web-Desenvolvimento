import './App.css'
import { useState } from 'react'
import Carros from './Components/Carros'
import { ConditionalRender } from './Components/ConditionalRender'
import Data from './Components/Data'
import Fragments from './Components/Fragments'
import ListRender from './Components/ListRender'
import ShowMyComponent from './Components/ShowMyComponent'
import ShowUserName from './Components/ShowUserName'
import Container from './Components/Container'
import EventProps from './Components/EventProps'
import Message from './Components/Message'
import HandleMessage from './Components/HandleMessage'

function App() {

  const carros = [
    {nome: "Palio" , km: 30000 , cor: "Prata" , marca: "Fiat" , preco: 15000 , venda: true},
    {nome: "Golf" , km: 96000 , cor: "Preto" , marca: "Vw" , preco: 26000 , venda: false},
    {nome: "Bmw" , km: 36200 , cor: "Azul" , marca: "BMW" , preco: 36000 , venda: false},
    {nome: "Corolla" , km: 15200 , cor: "Vermelho" , marca: "Chevrolet" , preco: 85000 , venda: true},
  ]

  function showClickMe(){
    console.log("Clicouuuu")
  }

  const [ message , setMessage ] = useState("");

  const handleMessage = ( msg ) => {
    setMessage( msg )
  }

  return (
    <>
    {/* useState */}
      <Data/>

      {/* Render de lista */}
      <ListRender/>

      {/* Render condicional */}
      <ConditionalRender/>

      {/* props */}
      <ShowUserName nome={ "Leodanado" } />

      {/* Desestruturando props */}
      <ShowMyComponent nome={"Lionel"} sobrenome={" Messi"}/>

      {/* Multiplos Componenetes */}
      
      { carros.map( carro => <Carros nome={ carro.nome } km={ carro.km } cor={ carro.cor } marca={ carro.marca } preco={ carro.preco } venda={ carro.venda }/>)}

      {/* Fragments */}
      <Fragments/>

      {/* Children */}
      <Container>
        <h2>Container</h2>
        <p>Container paragrafado</p>
      </Container>

      {/* Função em prop */}
      <EventProps handleClick={ showClickMe }/>

      {/* State lift12 */}
      <Message msg={ message }/>
      <HandleMessage ChangeMessage={ handleMessage }/>
    </>
  )
}

export default App
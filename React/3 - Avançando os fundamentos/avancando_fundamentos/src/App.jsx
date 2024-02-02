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

  return (
    <>
        <h1>Avançando em React</h1>

        {/* Imagem no public */}
        <img src='./public/img1.jpg' alt="" />

        {/* Imagem em assets */}
        <img src={img} alt="Simbolo do react" />

        {/* 3 - useState */}
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

import './App.css'

import { useState , useEffect } from 'react'
import { useFetch } from './hooks/useFetch'

const urlAPI = 'http://localhost:3000/products'

function App() {

  // 1 - Resgatando dados
  const [ produtos , setProdutos ] = useState([])

  // 4 - custom hook
  const { data: items , httpConfig } = useFetch( urlAPI )

  // useEffect( () => {

  //   async function getData(){
  //     const res = await fetch( urlAPI , { } )
  //     const data = await res.json()
  //     setProdutos( data )
  //   }

  //   getData();

  // } , [])

  // 2 - envio de dados
  const [ name , setName ] = useState("")
  const [ price , setPrice ] = useState("")


  const handleSubmit = async ( e ) => {

    e.preventDefault();

      const produtos = {
      name , 
      price,
    }

    // 5 - Refatorando
    httpConfig( produtos , "POST")

    // const res = await fetch(urlAPI , {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type' : 'application/json'
    //   },
    //   body: JSON.stringify( produtos )
    // })

    // // Carregamento Dinamico
    // const addedProduct = await res.json()
    // console.log(addedProduct)

    // setProdutos( ( prevProdutos ) => [ ...prevProdutos , addedProduct]  )

  }

  return (
    <>
      <h1>HTTP em React</h1>

      { items && 
        items.map( ( produto ) => (
          <ul>
            <li key={ produto.id }>{ produto.name } - R${ produto.price }</li>
          </ul>
      ))}

      {/* 3 - Enviando os dados */}
      <div className="add-produto">
        <form onSubmit={ handleSubmit }>
          <label>
            <span>Descrição:</span>
            <input type="text" value={ name } onChange={ ( e ) => setName( e.target.value )}/>
          </label>

          <label>
            <span>Preço:</span>
            <input type="text" value={ price } onChange={ ( e ) => setPrice( e.target.value )}/>
          </label>

          <input type="submit" value="Enviar" />
        </form>
      </div>
    </>
  )
}

export default App

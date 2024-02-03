import './App.css'

import { data } from "./data/data.js";

import { useState } from 'react'

import { CalculadoraIMC } from './components/CalculadoraIMC.jsx'
import { InfoTable } from './components/InfoTable.jsx'

function App() {

  const calcImc = ( e , height , weight ) =>{
    
    e.preventDefault();


    if( !height || !weight ) return;

    const pesoFloat = +weight.replace(",",".")
    const alturaFloat = +height.replace(",",".")

    const formIMC = ( pesoFloat / ( alturaFloat * alturaFloat ) ).toFixed(2)
    
    setImc( formIMC )

    data.forEach( ( item ) => {
      if( formIMC >= item.min && formIMC <= item.max){
        setInfo( item.info )
        setInfoClass( item.infoClass )
      }
    })

    if( !info ) return;
  }

  const resetCalc = ( e ) => {
    e.preventDefault();

    setImc("")
    setInfo("")
    setInfoClass("")
  }

  const [ imc , setImc] = useState("")
  const [ info , setInfo] = useState("")
  const [ infoClass , setInfoClass ] = useState("")

  return (
    <div className='container'>
      { !imc ? <CalculadoraIMC calcImc={ calcImc } /> : <InfoTable data={ data } valorImc={ imc } info={ info } infoClass={ infoClass } resetCalc={ resetCalc }/> }
    </div>
  )
}

export default App

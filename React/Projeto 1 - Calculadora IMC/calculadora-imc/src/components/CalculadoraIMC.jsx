import { useState } from 'react'
import Button from './Button'
import './CalculadoraIMC.css'

export const CalculadoraIMC = () => {

    const clearInput = () => {
        setHeigth("")
        setWeight("")
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
    }

    const [ heigth , setHeigth ] = useState("")
    const [ weight , setWeight ] = useState("")

  return (
    <div id='calc-container'>
      <h2>Calculadora de IMC</h2>  
      <form id='imc-form' onSubmit={ handleSubmit }>
        <div className="form-inputs">
            <div className="form-control">
                <label htmlFor="height">Altura:</label>
                <input type="text" name='height' id='height' placeholder='Exemplo 1,75' onChange={ ( e ) => setHeigth( e.target.value ) } value={ heigth }/>
            </div>
        
        
            <div className="form-control">
                <label htmlFor="weight">Peso:</label>
                <input type="text" name='weight' id='weight' placeholder='Exemplo 70.5' onChange={ ( e ) => setWeight( e.target.value ) } value={ weight }/>
            </div>
        </div>

        <div id="action-control">
            <Button id={ "calc-btn" } text={ "Calcular" }/>
            <Button id={ "clear-btn" } text={ "Limpar" } handleClick={ clearInput } />
        </div>
      </form>
    </div>
  )
}

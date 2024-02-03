import { useState } from 'react'
import Button from './Button'
import './CalculadoraIMC.css'

export const CalculadoraIMC = ( { calcImc } ) => {

    const clearInput = ( e ) => {
        e.preventDefault();
        setHeigth("")
        setWeight("")
    }

    // Impede que o usuario digite algo diferente de 0 a 9
    const validDigits = ( texto ) => {
      return texto.replace(/[^0-9,]/g , "")
    }

    const handleHeightChange = ( e ) => {
      const atualizaValor = validDigits(e.target.value)

      setHeigth( atualizaValor );

    }

    const handleWeightChange = ( e ) => {
      const atualizaValor = validDigits(e.target.value)
      setWeight( atualizaValor )
      
    }

    const [ heigth , setHeigth ] = useState("")
    const [ weight , setWeight ] = useState("")

  return (
    <div id='calc-container'>
      <h2>Calculadora de IMC</h2>  
      <form id='imc-form'>
        <div className="form-inputs">
            <div className="form-control">
                <label htmlFor="height">Altura:</label>
                <input type="text" name='height' id='height' placeholder='Exemplo 1,75' onChange={ ( e ) => handleHeightChange( e ) } value={ heigth }/>
            </div>
        
        
            <div className="form-control">
                <label htmlFor="weight">Peso:</label>
                <input type="text" name='weight' id='weight' placeholder='Exemplo 70.5' onChange={ ( e ) => handleWeightChange( e ) } value={ weight }/>
            </div>
        </div>

        <div id="action-control">
            <Button id={ "calc-btn" } text={ "Calcular" } action={ ( e ) => calcImc( e , heigth , weight ) }/>
            <Button id={ "clear-btn" } text={ "Limpar" } action={ clearInput } />
        </div>
      </form>
    </div>
  )
}

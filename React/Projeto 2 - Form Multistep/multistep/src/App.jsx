// Icons
import { GrFormNext , GrFormPrevious } from 'react-icons/gr'
import { FiSend } from 'react-icons/fi'

//Components
import { UserForm } from './components/UserForm.jsx'
import { ReviewForm } from './components/ReviewForm.jsx'
import { Thanks } from './components/Thanks.jsx'
import Steps from './components/Steps.jsx'

// hooks
import { useForm } from './hooks/useForm.jsx'
import { useState } from 'react'

import './App.css'

const formTemplates = {
  name: "",
  email: "",
  review: "",
  comment: ""
}


export default function App() {

  const [ data , setData ] = useState( formTemplates )

  const updateFieldHandler = ( key , value ) => {
    setData( ( prev ) => {
      return { ...prev , [key]:value }
    })
  }

  const formComponents = [
    <UserForm data={ data } updateFieldHandler={ updateFieldHandler }/> , 
    <ReviewForm data={ data } updateFieldHandler={ updateFieldHandler }/> , 
    <Thanks data={ data }/>
  ]

  const { currentStep , currentComponent , changeStep , isLastStep , isFirstStep } = useForm( formComponents )

  return (
    <div className='app'>
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>Ficamos felizes com a sua compra , utilize o formulario abaixo para avaliar o produto</p>
      </div>

      <div className="form-container">
        <Steps currentStep={ currentStep }/>

        <form>

        <div className="inputs-container">
          { currentComponent }
        </div>

        <div className="actions">
          
          { !isFirstStep && (
            <button type='button' onClick={ (  ) => changeStep( currentStep - 1 ) }>
              <GrFormPrevious/>
              <span>Voltar</span>
            </button>
          ) 

          }
          
          { !isLastStep ? (
            <button type='submit' onClick={ ( event ) => changeStep( currentStep + 1 , event )}>
              <span>Avançar</span>
              <GrFormNext/>
            </button>
          ) : (
            <button type='button' onClick={ ( event ) => changeStep( currentStep + 1 , event )}>
              <span>Enviar</span>
              <FiSend/>
            </button>
          )}
        </div>
        </form>
      </div>
    </div>
  )
}
import './App.css'
import Events from './components/Events'
import FirstComponents from './components/FirstComponents'
import { MyComponent } from './components/MyComponent'
import TemplateExpression from './components/TemplateExpression'

function App() {
  

  return ( 
    <>
    <h1>Fundamentos</h1>
    {/* Importando componente e comentario */}
      <FirstComponents/>

      <TemplateExpression/>

      <MyComponent/>

      <Events/>
    </>
  )
}

export default App

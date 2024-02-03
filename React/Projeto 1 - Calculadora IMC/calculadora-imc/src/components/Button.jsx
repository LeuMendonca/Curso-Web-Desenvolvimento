import './Button.css'

const Button = ({ id , text , action }) => {

  // Uma função que executa uma outra função e é passada para o componenete
  const handleAction = ( e ) => {
    action( e ) ; 
  }

  return (
    <button id={ id } onClick={ handleAction }>{ text }</button>
  )
}

export default Button
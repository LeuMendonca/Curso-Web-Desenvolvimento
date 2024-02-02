import { useState  } from 'react'
import './MyForm.css'


export const MyForm = () => {

    // 3 - Gerenciamento de dados
    const [ name , setName ] = useState("")
    const [ email , setEmail ] = useState("")
    const [ confirmEmail , setConfirmEmail ] = useState("")
    const [ bio , setBio ] = useState("")
    const [ role , setRole ] = useState("")


    const handleName = ( e ) => {
        setName( e.target.value )
    }

    const handleEmail = ( e ) => {
        setEmail( e.target.value )
    }

    {/* 5 - Envio de Formulario */}
    const handleSubmit = ( e ) => {
        e.preventDefault();
        console.log( email == confirmEmail)

        // Limpar campos
        setName("") 
        setEmail("")
        setConfirmEmail("")
        setBio("")
        setRole("")
    }

  return (
    <div>
        {/* 1 - Criação do Formulario */}
        {/* 5 - Envio de Formulario */}

        <form onSubmit={ handleSubmit }> 
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name='name' placeholder='Digite o seu nome' onChange={ handleName } value={ name }/>
            </div>

            {/* 2 - Label envolvendo input */}
            <label>
                <span>E-mail</span>
                <input type="email" name="email" id="email" placeholder='Digite o seu e-mail' onChange={ handleEmail } value={ email }/>
            </label>

            {/* Simplificando manipulação */}
            <label>
                <span>Confirme o seu E-mail</span>
                <input type="email" name="email" id="email" placeholder='Confirme o seu e-mail' onChange={ ( e ) => setConfirmEmail( e.target.value ) } value={ confirmEmail }/>
            </label>

            {/* 8 - Textarea */}
            <label>
                <span>Bio</span>
                <textarea name="bio" placeholder='Descrição do usuario' onChange={ ( e ) => setBio( e.target.value ) } value={ bio }></textarea>
            </label>

            {/* 9 - select */}
            <label>
                <span>Função no sistema</span>
                <select name="role" onChange={ ( e ) => setRole( e.target.value ) } value={ role }>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Admin</option>
                </select>
            </label>
            <input type="submit" value="Enviar" />
        </form>

        { name } { email } {confirmEmail} { bio } { role }
    </div>
  )
}

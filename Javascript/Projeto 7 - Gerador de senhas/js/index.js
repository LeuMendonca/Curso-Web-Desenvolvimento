// Seleção de Elementos
const generatePasswordButton = document.querySelector("#genereted-password-btn")
const generatedPasswordElement = document.querySelector("#generated-password")


// Novas funcionalidades
const openCloseGeneratorButton = document.querySelector("#open-generate-password")
const generatePasswordContainer = document.querySelector("#generated-options")
const lengthInput = document.querySelector("#length")
const lettersInput = document.querySelector("#letters")
const numberInput = document.querySelector("#numbers")
const simbolsInput = document.querySelector("#simbols")
const copyBtn = document.querySelector("#copy-password")


// Funções
// Letras , números e simbolos
const getLetterLowerCase = () => {
    //return String.fromCharCode( Math.floor( Math.random() * 26 ) + 97 )
    const randomNumber = Math.random() * 26 + 97 // Gera um número até 26 e soma com 97
    
    return String.fromCharCode(randomNumber)
}

const getLetterUpperCase = () => {
    return String.fromCharCode( Math.floor( Math.random() * 26 ) + 65 )
}

const getNumeric = () => {
    return  Math.floor( Math.random() * 10  + 48 ).toString() 
}

const getSimbol = () => {
    const simbolos = "#@$%&*"
    return simbolos[ Math.floor( Math.random() * simbolos.length )]
}

const generatePassword = ( getLetterLowerCase , getLetterUpperCase , getNumeric , getSimbol ) => {

    let password = ""
    // Segunda versão
    const passwordLength = +lengthInput.value

    const functionsPassword = [  ]

    if( lettersInput.checked ){
        functionsPassword.push( getLetterLowerCase , getLetterUpperCase)
    }

    if( numberInput.checked ){
        functionsPassword.push( getNumeric )
    }

    if( simbolsInput.checked ){
        functionsPassword.push( getSimbol )
    }

    if( functionsPassword.length == 0 ) return;

    for( let i = 0 ; i < passwordLength ; i++){
        const randomValue = functionsPassword[ Math.floor( Math.random() * functionsPassword.length  ) ]()
        password += randomValue

    }

    password = password.slice( 0 , passwordLength )

    generatedPasswordElement.style.display = 'block'

    generatedPasswordElement.querySelector("h4").innerText = password
}

// Eventos
generatePasswordButton.addEventListener("click" , () => {

    generatePassword(
        getLetterLowerCase , getLetterUpperCase , getNumeric , getSimbol
    )

})

openCloseGeneratorButton.addEventListener("click" , () => {

    generatePasswordContainer.classList.toggle("hide")

})

copyBtn.addEventListener("click" , ( e ) => {
    e.preventDefault();
    const password = generatedPasswordElement.querySelector("h4").innerText

    navigator.clipboard.writeText( password )
    .then( () => {
        copyBtn.innerText = 'Senha copiada.'
    })

    setInterval( () => {
        copyBtn.innerText = "Copiar"
    } , 1000)
})


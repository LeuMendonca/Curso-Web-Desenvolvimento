// Seleção de elementos
const multiplicationForm = document.querySelector("#multiplication-form")
const numberInput = document.querySelector("#number")
const multiplicationInput = document.querySelector("#multiplicator")

const multiplicationTable = document.querySelector("#multiplication-operations")
// Funções
const createTable = ( number , mult ) => {
    multiplicationTable.innerHTML = ""

    for( i = 0 ; i <= mult ; i++ ){
        const result = number * i

        const template = `<div class="row">
            <div class="operation">${ number } x ${ i } = </div>
            <div class="result">${ result }</div>
        </div>`

        // multiplicationTable.innerHTML += template
        
        const parser = new DOMParser(); // Instanciando um objeto para gerar um HTML a partir de uma string

        const htmlTemplate = parser.parseFromString(template , "text/html") // transformando a string em HTML

        const row = htmlTemplate.querySelector(".row") // Após a transformação da linha 22 , conseguimos selecionar a classe row

        multiplicationTable.append(row)
    }
}
// Eventos
multiplicationForm.addEventListener("submit" , (e) => {
    e.preventDefault();

    const multiplicationNumber = numberInput.value
    const multiplicatorNumber = multiplicationInput.value

    if( !multiplicationNumber || !multiplicatorNumber ) return;

    createTable( multiplicationNumber , multiplicatorNumber )
})
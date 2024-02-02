// Formulario de cadastro
const formCadastro = document.querySelector("#form-cadastro")
const inputCadastro = document.querySelector("#input-cadastro")

// Listagem de Todos
const containerTodos = document.querySelector("#container-todos")

// Funções
const salvaTarefa = ( text ) => {

    const allTodos = JSON.parse(localStorage.getItem("todos")) || []

    allTodos.push( {
        texto : text ,
        feito : false
    } )

    localStorage.setItem("todos" , JSON.stringify( allTodos ) )
}

const imprimeTarefa = () => {
    const allTodos = JSON.parse(localStorage.getItem("todos"))

    allTodos.forEach( ( elemento ) => {
        const div = document.createElement("div")
        div.classList.add("todo")

        const divButtons = document.createElement("div")
        divButtons.classList.add("control-buttons")

        const todoH3 = document.createElement("h3")
        todoH3.innerHTML = elemento.texto

        const btnCheck = document.createElement("button")
        btnCheck.classList.add("complete")
        btnCheck.innerHTML = '<i class="fa-solid fa-check"></i>'

        const btnUpdate = document.createElement("button")
        btnUpdate.classList.add("update")
        btnUpdate.innerHTML = '<i class="fa-solid fa-pen"></i>'

        const btnDelete = document.createElement("button")
        btnDelete.classList.add("delete")
        btnDelete.innerHTML = '<i class="fa-solid fa-xmark"></i>'

        divButtons.appendChild(btnCheck)
        divButtons.appendChild(btnUpdate)
        divButtons.appendChild(btnDelete)

        div.appendChild(todoH3)

        div.appendChild(divButtons)

        containerTodos.appendChild(div)
    })

    
}

// Eventos
formCadastro.addEventListener("submit" , ( e ) => {
    e.preventDefault()
    const textoTarefa = inputCadastro.value

    salvaTarefa( textoTarefa )
})

imprimeTarefa();
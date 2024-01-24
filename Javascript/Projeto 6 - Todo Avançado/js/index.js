// Seleção de Elementos
const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-input")
const todoList = document.querySelector("#todo-list")
const editForm = document.querySelector("#edit-form")
const editInput = document.querySelector("#edit-input")
const cancelEditBtn = document.querySelector("#cancel-edit-btn")
const searchInput = document.querySelector("#search-input")
const eraseBtn = document.querySelector("#erase-button")
const filterBtn = document.querySelector("#filter-select")


let oldInputValue;

// Funções
const saveTodo = ( text , done = 0 , save = 1) => {

    const divTodo = document.createElement("div")
    divTodo.classList.add("todo")

    const todoTitle = document.createElement("h3")
    todoTitle.textContent = text
    divTodo.appendChild(todoTitle)

    const finishTodo = document.createElement("button")
    finishTodo.classList.add("finish-todo")
    finishTodo.innerHTML = '<i class="fa-solid fa-check"></i>'
    divTodo.appendChild(finishTodo)


    const editTodo = document.createElement("button")
    editTodo.classList.add("edit-todo")
    editTodo.innerHTML = '<i class="fa-solid fa-pen"></i>'
    divTodo.appendChild(editTodo)


    const removeTodo = document.createElement("button")
    removeTodo.classList.add("remove-todo")
    removeTodo.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    divTodo.appendChild(removeTodo)

    // Utilizando dados da localStorage
    if( done ) {
        divTodo.classList.add("done")
    }

    if( save ){
        saveTodoLocalStorage(
            {
                text: text,
                done: 0
            }
        )
    }

    todoList.appendChild(divTodo)

    todoInput.value = ""
    todoInput.focus()
}

const toggleForms = () => {
    editForm.classList.toggle("hide")
    todoForm.classList.toggle("hide")
    todoList.classList.toggle("hide")
}

const updateTodo = ( texto ) => {
    const todos = document.querySelectorAll(".todo")

    todos.forEach( ( elemento ) => {
        let todoTitle = elemento.querySelector("h3")

        if( todoTitle.innerText == oldInputValue ){
            todoTitle.innerText = texto
        }
    })
}

const getSearchTodos = ( search ) => {
    const todos = document.querySelectorAll(".todo")

    const normalizedSearch = search.toLowerCase()

    

    todos.forEach( ( elemento ) => {
        elemento.style.display = "flex"

        const todoTitle = elemento.querySelector("h3").innerText.toLowerCase()

        if( !todoTitle.includes( normalizedSearch )){
            elemento.style.display = "none"
        }
    })

}

const filterTodos = ( filterValue ) => {
    const todos = document.querySelectorAll(".todo")

    switch( filterValue ){
        case "all":
            todos.forEach( ( elemento ) => elemento.style.display = 'flex')
            break

        case "done":
            todos.forEach( ( elemento ) => {

                elemento.classList.contains( "done" ) ? 
                elemento.style.display = "flex" : elemento.style.display = "none"

            })
            break

        case "todo":
            todos.forEach( ( elemento ) => {

                !elemento.classList.contains( "done" ) ? 
                elemento.style.display = "flex" : elemento.style.display = "none"

            })
            break

        default:
            break
    }
}

// Eventos
todoForm.addEventListener("submit" , ( e ) => {
    
    e.preventDefault();
    
    const inputValue = todoInput.value

    if( inputValue ){
        saveTodo( inputValue )
    }
})

document.addEventListener("click",( e ) => {
    const targetEl = e.target
    const parentEl = targetEl.closest("div") // Closest é usado para encontrar o elemento pai especificado mais próximo , no caso uma div

    let todoTitle;

    if( parentEl && parentEl.querySelector("h3")){
        todoTitle = parentEl.querySelector("h3").innerText
    }


    if( targetEl.classList.contains("finish-todo") ){
        parentEl.classList.toggle("done")
    }

    if( targetEl.classList.contains("edit-todo") ){
        toggleForms();
        editInput.value = todoTitle
        oldInputValue = todoTitle
    }

    if( targetEl.classList.contains("remove-todo") ){
        parentEl.remove()
    }
})

cancelEditBtn.addEventListener("click" , ( e ) => {
    e.preventDefault();
    toggleForms();
})

editForm.addEventListener("submit" , ( e ) => {
    e.preventDefault();

    const editInputValue = editInput.value
    if ( editInputValue ){
        updateTodo( editInputValue );
    }

    toggleForms();
})

searchInput.addEventListener("keyup" , ( e ) => {

    const search = e.target.value

    getSearchTodos( search );

})

eraseBtn.addEventListener("click" , ( e ) => {
    e.preventDefault();
    searchInput.value = ""
    searchInput.dispatchEvent(new Event("keyup")) // dispatchEvent dispara um evento.
})

filterBtn.addEventListener("change" , ( e ) => {

    const filterValue = e.target.value
    filterTodos(filterValue);

})

// Local Storage
const getTodosLocalStorage = ( ) => {
    const todos = JSON.parse(localStorage.getItem("todos")) || []

    return todos
}

const saveTodoLocalStorage = ( todo ) => {

    // Todos os todos da localstorage
    const todos = getTodosLocalStorage()
    // Adicionar o novo todo do array
    todos.push(todo)
    // Salvar tudo na localstorage
    localStorage.setItem( "todos" , JSON.stringify( todos ) )
}
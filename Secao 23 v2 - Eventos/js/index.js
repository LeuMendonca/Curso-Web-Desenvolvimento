// 10 - Eventos segunda parte
// Blur e focus
const campoTexto = document.querySelector("#campoTexto");

// Focus é usado quando foca/entra dentro do campo
campoTexto.addEventListener("focus" , () => {
    console.log("Entrou no input...")
})

// Blur é o contrario do focus , é usado quando sai do campo
campoTexto.addEventListener("blur" , () => {
    console.log("Saiu do input...")
})


// 11 - load
// load é usado quando a página é carregada
window.addEventListener("load",()=>{
    console.log("Página carregada")
})

window.addEventListener("beforeunload" , (e) => {
    e.preventDefault();
    e.returnValue = "";
})

// 12 - debounce
// Debounce é um algoritimo criado para executar um evento de tempos em tempos
const debouce = (funcao , delay) => {
    let timeout; // Criamos um timeout vazio

    return ( ...args ) => { // Retornamos um função
        if( timeout ){
            clearTimeout(timeout) // Caso exista um timeout , limpamos
        }

        timeout = setTimeout( () => { // criamos o timeout
            funcao.apply(args) // Executamos a função , o apply serve para colocar os parametros na função
        },delay) // delay é o tempo do setTimeout
    }
}

window.addEventListener("mousemove",debouce( () => { // Ao invés passarmos a função , passamos 
    console.log("Movendo...")                        //debouce
},300))
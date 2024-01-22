// 1 - Adicionando eventos
const meuBotao = document.querySelector("#my-button")
meuBotao.addEventListener("click", () => console.log("Clicou em mim :("))

// 2 - Removendo evento
// Obs: para remover o evento com sucesso é preciso usar uma função nomeada , arrow function não funcionará
const btn = document.querySelector("#btn")
btn.addEventListener("click" , imprimirMensagem)

function imprimirMensagem(){
    console.log("Evento ativado!!")
}

const btnRemove = document.querySelector("#other-btn")
btnRemove.addEventListener("click" , () =>{
    console.log("Removendo eventos!")
    btn.removeEventListener("click",imprimirMensagem)
})

// 3 - Argumento do evento
const titulo = document.querySelector("#meu-titulo")
titulo.addEventListener("click" , (e) => {
    console.log(e)
    console.log(e.offsetX)
    console.log(e.pointerType)
    console.log(e.target)
})

// 4 - Propagação
const divBtn = document.querySelector("#div-btn")
const containerBtn = document.querySelector("#btn-container")


divBtn.addEventListener("click",(e)=>{
    e.stopPropagation()
    console.log("Evento 1")
})


containerBtn.addEventListener("click",()=>{
    console.log("Evento 2")
})

// 5 - preventDefault
const linkGoogle = document.querySelector("#linkGoogle")
linkGoogle.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("Evento padrão cancelado.")
})

// 6 - Eventos de teclas]
const inputTexto = document.querySelector("#texto")
inputTexto.addEventListener("keyup",(e)=>{
    if(e.key == "Enter"){
        console.log(`Pressionou a tecla Enter no input!`)
    }
})

document.addEventListener("keyup" , (e) => {
    console.log(`Soltou a tecla ${e.key}`)
})

document.addEventListener("keydown", (e) =>{
    console.log("Pressionou a tecla" , e.key)
})

// 7 - Eventos de Mouse
const mouse = document.querySelector("#mouse")
mouse.addEventListener("mouseover",()=> console.log("Entrou no elemento!"))
mouse.addEventListener("mouseout",()=> console.log("Saiu do elemento!"))
mouse.addEventListener("mousemove",()=> console.log("Moveu-se no elemento!"))
mouse.addEventListener("dblclick",()=> console.log("Dois cliques no elemento!"))
mouse.addEventListener("mousedown",()=> console.log("Pressionou o elemento!"))
mouse.addEventListener("mouseup",()=> console.log("Soltou o elemento!"))

// 9 - Evento de scroll
window.addEventListener("scroll",( e ) => {
    if( window.scrollY > 200){
        console.log("Passamos do combinado de 200px")
    }
})
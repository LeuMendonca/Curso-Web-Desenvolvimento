// 1 - Movendo-se pelo DOM
// childNodes verifica os filhos do pai , como exemplo abaixo

console.log(document.body)

console.log(document.body.childNodes) 

console.log(document.body.childNodes[1])

console.log(document.body.childNodes[1].childNodes[1].textContent)

// 2 - Selecionando tag elementos
const listItens = document.getElementsByTagName("h2")
console.log(listItens)

// 3 - Selecionando elementos por id
const itemTitulo = document.getElementById("title")
console.log(itemTitulo)

// 4 - Selecionando elementos por classe
const produtoClasse = document.getElementsByClassName("product")
console.log(produtoClasse)

// 5 - Selecionando elemento por seletor CSS
const produtoSeletorCSS = document.querySelectorAll(".product")
console.log("Seletor QuerySelectorAll" , produtoSeletorCSS)

const mainSeletorCSS = document.querySelector("#id-container")
console.log(mainSeletorCSS)

// 6 - insertBefore
const tituloHeader = document.querySelector("#title")
const header = tituloHeader.parentElement // Busca todo o elemento pai do elemento selecionado

console.log(tituloHeader.parentElement)

const elementoP = document.createElement("p")
elementoP.innerText = "Criado pelo javascript"

header.insertBefore(elementoP , tituloHeader)
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
// Insere um elemento antes de um outro elemento
const listaNav = document.getElementById("listaNavegacao")
const paiListaNav = listaNav.parentElement

const createH3 = document.createElement("h3")
createH3.textContent = "Navegação JavaScript"

paiListaNav.insertBefore( createH3 , listaNav ) // Elementpai.insertBefore( eleme.novo , eleme a acrescentar antes )

// 7 - appendChild
// Elementos filhos adicionados com appendChild serão adicionados por ultimo no elemento pai
const avisos = document.querySelector("#avisos")

const paragrafoAviso = document.createElement("p")
paragrafoAviso.textContent = "Hoje não teremos aula."

avisos.appendChild(paragrafoAviso)

// 8 - replaceChild
// Altera um elemento por outro: elementPai.replaceChild(newElement , oldElement)
const tituloPrincipal = document.querySelector("#title")

const elementoPaiTitle = tituloPrincipal.parentElement

const tituloPrincipalh2 = document.createElement("h3")
tituloPrincipalh2.textContent = "Alterado de h1 para h3 com replaceChild"

elementoPaiTitle.replaceChild(tituloPrincipalh2 , tituloPrincipal)

// 9 - createTextNode
const textNode = document.createTextNode("Criado por createTextNode")
const h3TextNode = document.createElement("h3")

console.log(textNode)

h3TextNode.appendChild(textNode)
console.log(h3TextNode)

mainSeletorCSS.appendChild(h3TextNode)

// 10 - Alterando atributos
const linkHome = document.querySelector("#navHome")
const oldLink = linkHome.getAttribute("href")
console.log(oldLink) // #

linkHome.setAttribute("href","https://www.google.com")
linkHome.setAttribute("target","_blank")
const atuLink = linkHome.getAttribute("href")

console.log(atuLink)

// 11 - Altura e Largura
const footer = document.querySelector("footer") // Sem seletor , conseguimos coletar a primeira tag do body
console.log(footer.offsetWidth) // Coleta a informação de tamanho da largura
console.log(footer.offsetHeight) // Coleta a informação de tamanho da altura

// Elemento sem borda
/*
    O CSS do elemento possui 4px de borda , ou seja 4 de cada lado , logo o resultado é 8px menor em cada log

footer {
    border: 4px solid red;
}
*/

console.log(footer.clientWidth) // 1422px - 8px = 1414px
console.log(footer.clientHeight) // 58px - 8px = 50px


// 12 - Posição do elemento
console.log("-".repeat(15) + " Posição do footer " + "-".repeat(15) )
console.log(footer.getBoundingClientRect())

// 13 - CSS com JS
footer.style.color = "orangered"
footer.style.backgroundColor = "black"
footer.style.border = "4px solid blue"

// 14 - CSS multiplo com JS
const styleMultipleProduct = document.querySelectorAll(".product")

for( const element of styleMultipleProduct){
    element.style.borderBottom = "1px solid black"
}
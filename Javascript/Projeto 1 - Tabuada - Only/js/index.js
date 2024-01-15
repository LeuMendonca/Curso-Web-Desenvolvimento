const numeroTabuada = document.querySelector("#numeroTabuada")
const numeroAte = document.querySelector("#numeroAte")
const buttonCalc = document.querySelector(".button-calc")
const divResultados = document.querySelector(".resultados")

buttonCalc.addEventListener("click" , () => {
    if( numeroAte.value > 0 ){

        const boxResultados = document.createElement("div")
        boxResultados.setAttribute("class" , "div-resultados")

        for( let c = 1 ; c <= numeroAte.value ; c++ ){
            const elementParagrafo = document.createElement("p")
            elementParagrafo.setAttribute("class" , "operacao")
            elementParagrafo.textContent = `${numeroTabuada.value} x ${c} = ${numeroTabuada.value * c}
            `
            boxResultados.appendChild(elementParagrafo)
        }
        
        const titulo = document.createElement("h2")
        titulo.setAttribute("id","informativo")
        titulo.textContent = `Tabuada do número: ${numeroTabuada.value}`

        const divResultados = document.querySelector(".div-resultados")

        const paiInformativo = divResultados.parentElement
        paiInformativo.replaceChild(boxResultados,divResultados)

        const h2Informativo = document.querySelector("#informativo")
        const paiH2Informativo = h2Informativo.parentElement

        paiH2Informativo.replaceChild(titulo , h2Informativo)
    }
})

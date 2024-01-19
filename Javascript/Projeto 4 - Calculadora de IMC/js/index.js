const altura = document.querySelector("#heigth")
const peso = document.querySelector("#weigth")
const formIMC = document.querySelector("#form-imc")

const areaInformacoes = document.querySelector("#container-info")


formIMC.addEventListener("submit", ( e ) => {

    e.preventDefault();
        
    const valorAltura = parseFloat(altura.value.replace("," , "."))
    const valorPeso = parseFloat(peso.value)

    const calculoIMC = valorPeso / ( valorAltura * valorAltura )
    const resultado = `<p id="Resultado">O resultado do IMC é: ${calculoIMC.toFixed(2)}</p>`
    
   
    
})

const altura = document.querySelector("#altura")
const peso = document.querySelector("#peso")
const formIMC = document.querySelector("#form-imc")
const informacoesIMC = document.querySelector("#info-imc")
const btnVoltar = document.querySelector("#voltarIMC")

const spanValor = document.querySelector("#valor-imc")
const spanSituacao = document.querySelector("#situacao-atual")

const calcularIMC = (altura, peso) => {
    const valorAltura = altura.replace(",", ".")
    const valorPeso = peso

    console.log(valorAltura, valorPeso)

    return (valorPeso / (valorAltura * valorAltura)).toFixed(2)
}

const limparCampos = () => {
    altura.value = ""
    peso.value = ""
    spanValor.innerText = ""
    spanSituacao.innerText = ""
}

formIMC.addEventListener("submit", (e) => {
    e.preventDefault();

    if(altura.value && peso.value){
        const valueAltura = altura.value
        const valuePeso = peso.value

        const resIMC = calcularIMC(valueAltura, valuePeso)
        let classificacao = ''

        if( resIMC < 18.5 ){
            classificacao = 'Magreza'
        }else if( resIMC >= 18.5 && resIMC <= 24.9 ){
            classificacao = 'Normal'
        }else if( resIMC >= 25 && resIMC <= 29.9 ){
            classificacao = 'Sobrepeso'
        }else if( resIMC >= 30 && resIMC <= 39.9 ){
            classificacao = 'Obesidade'
        }else{
            classificacao = "Obesidade grave"
        }

        spanValor.innerText = resIMC
        spanSituacao.innerText = classificacao

        formIMC.classList.toggle("not-exibir")
        informacoesIMC.classList.toggle("not-exibir")
    }else{
        const errorMsg = document.querySelector(".error")
        
        if ( !errorMsg ){
            const titulo = document.querySelector("#form-imc #title")
        
            titulo.insertAdjacentHTML("afterend","<p class='error'>Valores invalidos.</p>")
    
            setTimeout( () => {
                document.querySelector(".error").remove()
            },3000)
        }
        
    }
})

btnVoltar.addEventListener("click" , () => {
    limparCampos();
    formIMC.classList.toggle("not-exibir")
    informacoesIMC.classList.toggle("not-exibir")
})

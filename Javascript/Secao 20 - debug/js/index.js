// 1 - Strict
"use strict";

// opa = "Teste" // O "use strict" apresenta um erro ao declarar uma variavel global
// const undefined = "Não existe" // Não permite uso de variaveis do javascript como let,undefined, null
// delete [].length // Não podemos deletar propriedades

// 2 - Console log
const lista = [1 , 2 , 3 , 4 , 5]

lista.forEach((number) => console.log(number)) // Imprimindo no console os números

// 3 - Debugger
let c = 1
let d = 2

if(c == 1){
    c = d + 2
}

//debugger; // Pausando a execução do javascript

let total = 0
lista.forEach((n) => total += n)
console.log(total)

console.log("Passou do primeiro debugger")

//debugger;

console.log("Passou do segundo debugger")


// 4 - Tratamento de dados

function validaNumber(n){
    const numeroRecebido = Number(n)
    
    if(Number.isNaN(numeroRecebido)){
        console.error("Não é um número valido")
        return
    }
    console.log("é um número valido")
    return
}

validaNumber(5)
validaNumber("Jabuticaba")

// 5 - exceptions
function validaNumero2( numero ){
    if(!Number.isInteger(numero)){
        throw new Error("O número passado não é um inteiro")
        return;
    }
    console.log("É um número inteiro")
    return;
}
validaNumero2(12)


// 6 - Try catch
try{
    console.log("Passou aqui ")
    validaNumero2("Numero falso")
}
catch(  error ){
    console.log(error)
}

// 7 - Finally
try{
    const value = validaNumber("skd")

    if( !value ){
        throw new Error("Valores invalidos")
    }
}catch(error){
    console.log(error)
}finally{
    console.log("O código foi executado...")
}

// 8 - Assertion
function checkArrays(arr){
    if( arr.length == 0){
        throw new Error("O array precisa ter elementos")
    }else{
        console.log(`O array tem ${arr.length}`)
    }
}

checkArrays([])
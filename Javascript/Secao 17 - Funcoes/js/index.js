// 1 - Criando uma função
function minhaFuncao(){
    console.log("Esta é minha primeira função")
}

minhaFuncao()

const funcaoVariavel = function (){
    console.log("Função em variavel")
}

funcaoVariavel()

function funcaoComParametro(texto){
    console.log(`Imprimindo: ${texto}`)
}

funcaoComParametro("Aqui está o parametro")

// 2 - Função com retorno
function soma(n1 , n2){
    return n1 + n2
}

const n1 = 10
const n2 = 20
const n3 = 30
const n4 = 40

const resultado1 = soma(n1 , n3)
console.log(resultado1)

const resultado2 = soma(n2 , n4)
console.log(resultado2)

console.log(soma(resultado1 , resultado2))

// 3 - Escopo da função
let y = 10

function testandoEscopo(){
    let y = 20
    console.log("Dentro da função o Y vale: " , y)
}
testandoEscopo()

console.log("Fora da função o Y vale: " , y)

// Escopo aninhado
function escopoAninhado(){
    let m = 10
    console.log(m)

    if(true){
        let m = 20
        console.log(m)

        if( true ){
            let m = 30
            console.log(m)
        }
    }
}
escopoAninhado()

let m = 40
console.log(m)

// Arrow Function

const parImpar = ( a ) =>{
    if( a % 2 == 0){
        console.log("Número Par")
        return
    }
    console.log("Número impar")
}

parImpar(2)
parImpar(1)
parImpar(3)

// Arrow Function reduzida
const arrow = ()=> console.log("Arrow function ativada!!")
arrow()

const somaArrow = ( a , b ) => a + b 

console.log(somaArrow( 2 , 3 ))

// Parametro Opcional
const multiplicacao = ( x , y ) =>{
    if( y === undefined ){
        return x * 2
    }
    return x * y
}

console.log(multiplicacao(2))

const boasVindas = ( nome ) => {
    if( nome === undefined ){
        return 'Olá cliente!'
    }
    return `Olá ${ nome }!`
}

console.log(boasVindas("Leonardo"))
console.log(boasVindas())


// Valor default
function divisao( a , b = 2 ){
    return a / b
}

console.log(divisao(10 , 2))
console.log(divisao( 12 ))

// Closure
function someClosure(){
    const txt = "algum texto"

    function display(){
        console.log(txt)
    }

    display()
}
someClosure()

// 10 - Mais sobre closure
const multiplicaoClosure = ( n ) => {
    return ( m ) => {
        return n * m
    }
}

const c1 = multiplicaoClosure(2)

console.log(c1)
console.log(c1(10))

// 11 - Recursao
const ateDez = ( n , m) => {
    if( n <= 10){
        console.log("A função parou de executar")
    }else{
        const x = n - m
        console.log(x)
        ateDez(x , m)
    }
}

ateDez(100 , 15)

function fatorial(numero){
    if( numero === 0){
        return 1
    }else {
        return numero * fatorial(numero - 1)
    }
}

console.log(fatorial(8))
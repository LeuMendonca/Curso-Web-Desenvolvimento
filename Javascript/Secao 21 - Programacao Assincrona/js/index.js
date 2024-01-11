// 1 - setTimeout
console.log("Ainda não executou")

setTimeout(()=> console.log("Executou agora"),5000)

console.log("Ainda não executou 2")

// 2 - setInterval
//setInterval( ()=> console.log("Executando setInterval"),1000)

// 3 - Promises
const promessa = Promise.resolve(5 + 5)

console.log("Algum código")

promessa.then( value => {
    console.log("A soma é" , value)
    return value
}).then( (value) => value -1)
.then( value => console.log("Agora o resultado é" ,value))

console.log("Outro código")

// 4 - Falha na promise
Promise.resolve("3335dsa" * 5)
.then( function(num){
    if(Number.isNaN(num)){
        throw new Error("Não é um número valido")
    }else{
        return num * 2
    }
}).then( ( value ) => {
    console.log("O valor atual é: ",value)
    return value - 10
}).then( (value) => console.log(value))
.catch( err => console.log(err))

// 5- Rejeitando Promise
function checkNumber(n){
    return new Promise((resolve,reject)=>{
        if(n > 10){
            resolve("Maior do que 10")
        }else{
            reject(new Error("Menor do que 10"))
        }
    })
}

const promiseUm = checkNumber(5)
promiseUm.then( (value) => console.log("xxx",value)).catch(erro => console.log("Erro catch:" , erro))


// 6 - Resolvendo varias promessas
const p1 = new Promise((resolve,reject)=>{
    setTimeout( ()=> resolve(10) ,1000)
})

const p2 = Promise.resolve( 10 + 10 )

const p3 = new Promise(( resolve,reject ) => {
    if ( 30 > 10 ){
        resolve(30)
    }else{
        reject("Erro!")
    }
})

Promise.all([p1,p2,p3]).then( value => console.log(value) )

// 7 - async function
async function somaNumero(a , b){
    return a + b
}


somaNumero(2 , 5).then( ( value ) =>{
    console.log("O valor da soma é:" + value)
})

console.log("Teste async")

// 8 - async await
function resolveComDelay(){
    return new Promise( ( resolve ) =>{
        setTimeout( ()=>{
            resolve("Resolveu a promisse")
        },2000)
    })
}

async function chamadaAsync(){
    console.log("Chamando a Promise , e esperando o resultado")
    const resultado = await resolveComDelay()
    console.log("O resultado chegou: ",resultado)
}

chamadaAsync()

// 9 - Generators
function* generator(){
    yield "abobrinha"
    yield "alface"
    yield "tomate"
    yield "frango assado"
    yield "fritas com bacon"
}

const gen = generator()

console.log(gen.next().value)
console.log("-".repeat(15))
console.log(gen.next().value)
console.log("-".repeat(15))
console.log(gen.next().value)
console.log("-".repeat(15))
console.log(gen.next().value)
console.log("-".repeat(15))
console.log(gen.next().value)
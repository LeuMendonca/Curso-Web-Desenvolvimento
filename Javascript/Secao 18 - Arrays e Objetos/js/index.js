// 1 - Array
const lista = [ 1 , 2, 3 ]
console.log(lista)

const lista_completa = ["Leonardo" , 2 , 2.15 , false , []]
console.log(lista_completa)

// 2 - Mais sobre arrays
const lista_completa2 = ["Leonardo" , 2 , 2.15 , false , []]
console.log(lista_completa2[2]) // Acessando index

// 3 - Propriedades
const numeros = [ 1 , 3 , 2 , 5 ]

console.log(numeros.length)
console.log(numeros["length"])


// 4 - Metodos

// Concat junta duas listas em uma só
const maisNumeros = [10 , 9 , 8 , 7]
const maisNumeros2 = [6, 5, 4, 3]

const todosNumeros = maisNumeros.concat(maisNumeros2)
console.log(todosNumeros)

// toUpperCase deixa as letras maiusculas
const texto = "AlgUm tExto"
console.log( texto.toUpperCase() )

// toLowerCase deixa as letras minusculas
console.log( texto.toLowerCase() )

// indexOf é usado para encontrar uma letra na string
console.log( texto.indexOf("U") ) // Resultado 3 


// 5 - Objetos
const pessoa = {
    nome: "Leonardo",
    idade: 22,
    profissao: "Programador"
}

console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.profissao)

// 6 - Criando e deletando propriedades
const carro = {
    motor: 2.0,
    marca: "Fiat",
    modelo: "Palio",
    km: 20000
}
console.log(carro)

carro.ano = 2014
console.log(carro)

delete carro.km
console.log(carro)


// 7 - Mais sobre objetos
const obj = {
    a: "teste",
    b: true
}

console.log(obj instanceof Object)

const obj2 = {
    c: []
}

Object.assign(obj2 , obj) // Com assign conseguimos pegar as propriedades de obj e colocar em obj2

console.log(obj2)

// 8 - Conhecendo melhor os objetos
console.log(Object.keys(obj)) // Com keys conseguimos uma lista com as propriedades do objeto
console.log(Object.keys(obj2))

console.log(Object.entries(carro))

// 9 - Mutação
const objNome = {
    nome: "Leonardo"
}

const objLeo = objNome

console.log(objLeo) 

objNome.sobrenome = "Mendonça" // Ao adicionarmos uma propriedade o objeto mutação também recebe essa propriedade.

console.log(objLeo)

delete objLeo.sobrenome // Deletar o objeto mutante irá deletar o objeto raiz

console.log(objNome)
console.log(objLeo)


// 10 - Loop em array
const usuarios = ["Leonardo" , "Francisco" , "Laís" , "Renato"]

for(let c = 0 ; c < usuarios.length ; c++){
    console.log(usuarios[c])
}

// 11 - Push e ePop
// Push adiciona um elemento ao fim da lista
// Pop remove o ultimo elemento da lista

const letras = [ "a" , "b" , "c"]
letras.push("d","e","f")

console.log(letras)

letras.pop()
console.log(letras)

const itemRemovido = letras.pop() // Pop também retorna o item removido 
console.log(itemRemovido)

// 12 - shift e unshift
// Shift remove o primeiro item da lista
// unshift adiciona ao primeiro index da lista

const numbers = [ 1 , 2 , 3 , 4]
console.log(numbers.shift()) // Mostrando qual elemento foi excluido
console.log(numbers)

numbers.unshift(1) // Retornando 1 para lista
console.log(numbers)


// 13 - indexOf e lastIndexOf

// indexOf encontra na lista o valor desejado , caso não encontre o resultado será -1
const funcionarios = ["Leonardo" , "Gabriel" , "Douglas" , "Thais" , "Yasmim","Leonardo"]
console.log(`O index do Leo é: ${funcionarios.indexOf("Leonardo")}`)

// lastIndexOf caso tenha mais de um valor igual encontra o ultimo valor da lista
console.log(`O ultimo Leo da lista é: ${funcionarios.lastIndexOf("Leonardo")}`)


// 14 - Slice
const carros = ["Palio" , "Gol" , "Celta" , "Corsa" , "Uno"]
console.log(carros.slice(1,3 )) // O resultado é ["Gol","Celta"] pois o ultimo elemento é ignorado
console.log(carros.slice(1,3 + 1 )) // O resultado é ["Gol","Celta","Corsa"] 
console.log(carros.slice(1)) // Pega do index 1 pra frente: ["Gol" , "Celta" , "Corsa" , "Uno"]

// 15 - forEach
carros.forEach( (carro) =>{
    console.log(carro)
})

const clientes = [
    {
        nome: "Josemar da Silva",
        idade: 53
    },
    {
        nome: "Francismar Ferreira",
        idade: 45
    },
    {
        nome: "Roberto Claudio",
        idade: 36
    },
]

clientes.forEach( (cliente) => {
    console.log(`Nome do cliente: ${cliente.nome}\nIdade: ${cliente.idade}`)
})


// 16 - Includes
const animais = ["Urso","Leão","Cachorro","Girafa","Peixe"]
console.log(animais.includes("Girafa")) // true
console.log(animais.includes("Elefante")) // false

// 17 - Reverse
// Reverse coloca a lista ao contrario , modificando a lista original. Cuidado
const reverseNumeros = [1,2,3,4,5,6,7,8,9,10]
console.log(reverseNumeros)

reverseNumeros.reverse()

console.log(reverseNumeros)


// 18 - Trim
// Remove os caracteres especiais , espaços no final da frase...
const trimTeste = " Jabuti "

console.log(trimTeste)
console.log(trimTeste.trim())

// 19 - padstart e padend
// Primeiro argumento é a quantidade de digitos da string
// Segundo argumento é o digito que será inserido 
// O resultado será 0001 , pois completa 4 digitos com 0

const padstartTeste = '1'
console.log(padstartTeste.padStart(4,"0")) 

console.log(padstartTeste.padEnd(4,"0"))

// 20 - Split
// Transforma uma string em array , o seu parametro define onde será dividido

const testeSplit = "Transformando em um array"
console.log(testeSplit.split(" "))

// 21 - Join
// O parametro do join é como será separado cada index
const stringArray = ["Unindo" , "atraves" , "do" , "join"]

console.log(stringArray.join(" "))


// 22 - Repeat

const repetindo = "Repete"
console.log(repetindo.repeat(5))

// 23 - rest operator
// São os 3 pontinhos antes do parametro indicando que não há uma quantidade exata de parametros, aceitando inifitos parametros.

const somaInfinita = (...args) =>{
    
    let inicio = 0
    
    args.forEach((arg)=>{
        inicio += arg
    })
    console.log(inicio)
}

somaInfinita(2,5,3,4,6,5,9)

// 24 - for of
const somaInfinitaV2 = (...args) =>{

    let total = 0

    for(num of args){
        total += num
    }
    return total
}

console.log(somaInfinitaV2(2,6,5,4))


// 25 - Destruturing em objetos
const user = {
    nickname: "LeuMendonca",
    password: "1234",
    age: 22
}

// Usamos chaves e os nomes das propriedades que desejamos guardar em variaveis para trabalhar em alguma parte do projeto , sem a necessidade de criar uma variavel para cada prop do obj
const { nickname,password ,age } = user

console.log(nickname)
console.log(password)
console.log(age)

// Renomeando variaveis
const { nickname:nomeUsuario } = user
console.log("Renomeando variavel: " ,nomeUsuario)

// 26 - Destruturing em arrays

const times = ["Palmeiras" , "Cruzeiro" , "Flamengo"]

const [saoPaulo , minasGerais,rioJaneiro] = times

console.log(saoPaulo,minasGerais,rioJaneiro)

// 27 - JSON
const myJson = '{"name":"Leonardo" , "age":22 , "tel":"37998459005" , "skills": ["python" , "javascript" , "php"]}'
console.log(typeof myJson)
console.log(myJson)

// 28 - Conversoes de JSON
// Parse transforma um JSON em objeto , json nada mais é que uma string formatada em chaves.
// stringify reverte o processo transformando o objeto em json(string)

// JSON para Objeto
const objJSON = JSON.parse(myJson)
console.log(objJSON)
console.log(typeof objJSON)

// Objeto para JSON
const myNewJSON = JSON.stringify(objJSON)
console.log(myNewJSON)
console.log(typeof myNewJSON)
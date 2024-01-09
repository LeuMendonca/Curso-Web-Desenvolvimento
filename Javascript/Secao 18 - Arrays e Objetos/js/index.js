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
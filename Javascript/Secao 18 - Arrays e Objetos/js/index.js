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

// Criando e deletando propriedades
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
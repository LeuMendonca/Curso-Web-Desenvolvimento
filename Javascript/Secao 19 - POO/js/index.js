// 1 - Metodos
const animal = {
    nome: "Bob",
    latir: () => console.log("Au au")
}

console.log(animal.nome)
animal.latir()


// 2 - Aprofundando em metodos
const pessoa = {
    nome: "Leonardo",

    getNome: function(){
        return this.nome
    },

    setNome: function(newNome){
        this.nome = newNome
    }
}

console.log(pessoa.getNome())
pessoa.setNome("Leonardo v2")
console.log(pessoa.getNome())

// 3 - Prototype
const texto = "Leo"
console.log(Object.getPrototypeOf(texto))

// 4 - Mais sobre prototypes
const myObj = {
    a: "b"
}

console.log(Object.getPrototypeOf(myObj))
console.log(Object.getPrototypeOf(myObj) === Object.prototype) // true

const segundoObj = Object.create(myObj)
console.log(segundoObj)
console.log(segundoObj.a)

console.log(Object.getPrototypeOf(segundoObj) === myObj) // true

// 5 - Classes basicas
const cachorro = {
    raca: null,
    patas: 4
}

const pinsher = Object.create(cachorro)
pinsher.raca = "Pinsher"

console.log(pinsher)
console.log(pinsher.patas)

const pastorAlemao = Object.create(cachorro)
pastorAlemao.raca = "Pastor Alemão"
console.log(pastorAlemao)


// 6 - Função como classe - Função construtora
function criarCachorro(nome , raca){
    const cachorro = Object.create({})
    cachorro.nome = nome
    cachorro.raca = raca

    return cachorro
}

const cachorro1 =  criarCachorro("Bob" , "Pinsher")
const cachorro2 =  criarCachorro("Fernando" , "Poodle")
const cachorro3 =  criarCachorro("Josemar" , "PitBull")

console.log(cachorro1)
console.log(cachorro2)
console.log(cachorro3)

// 7 - Funções como classe
function Carro(marca , ano){
    this.marca = marca
    this.ano = ano
}

const carro1 = new Carro("Fiat" , 2001)
console.log(carro1)

const carro2 = new Carro("Gol" , 2006)
console.log(carro2)

// 8 - Medotos na função construtora
Carro.prototype.buzinar = () => console.log("Bi bi biiii...")

carro1.buzinar()

// 9 - Classes ES6
class Contrato{
    constructor(valor,cliente,inicio_contrato,fim_contrato){
        this.valor = valor
        this.cliente = cliente
        this.inicio_contrato = inicio_contrato
        this.fim_contrato = fim_contrato
    }
}

const contrato1 = new Contrato(2000,"Josemar Mendonça","2023-01-09","2023-01-15")
console.log(contrato1)

console.log(Contrato.prototype)

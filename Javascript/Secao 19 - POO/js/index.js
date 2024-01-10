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

// 10 - Mais sobre classes
class Funcionario{
    constructor(nome_completo , idade , salario , cargo){
        this.nome_completo = nome_completo
        this.idade = idade
        this.salario = salario
        this.cargo = cargo
    }

    getNome(){
        console.log(`Funcionario: ${this.nome_completo}`)
    }
}

const f1 = new Funcionario("Leonardo Mendonça" , 22 , 1800 , "Programador")
f1.getNome()

// override
class Humano{
    constructor(nome,idade){
        this.nome = nome
        this.idade = idade
    }
}

const leonardo = new Humano("Leonardo" , 22)

Humano.prototype.idade = "Não definida"

console.log(leonardo.idade)
console.log(Humano.prototype.idade)

// 12 - Symbol
class Gato{
    constructor(nome , raca){
        this.nome = nome
        this.raca = raca
    }
}

// Todo gato tem 4 patas então definimos da seguinte forma
const patas = Symbol()
Gato.prototype["patas"] = 4

// Todo gato come raçao
const alimento = Symbol()
Gato.prototype["alimento"] = "Ração"

const gatinho1 = new Gato("Alfredo" , "Siamês")
console.log(gatinho1.patas) // Resultado é 4
console.log(gatinho1.alimento) // Resultado é Ração

// 13 - Getter e Setter

class Produto{
    constructor(descricao , valor){
        this.descricao = descricao
        this.valor = valor
    }

    get getDescricao(){
        return this.descricao
    }

    set setDescricao(newDescricao){
        this.descricao = newDescricao
    }

    get getValor(){
        return this.valor
    }

    set setValor(newValor){
        this.valor = newValor
    }
}

const produto1 = new Produto("Leite Condensado" , 6.99)
console.log(produto1.getDescricao)
produto1.setDescricao = "Leite Condensado v2" // Alterando descrição do produto via setter
console.log(produto1.getDescricao)

console.log(produto1.getValor)
produto1.setValor = 8.65 // Alterando valor pelo setter
console.log(produto1.getValor)
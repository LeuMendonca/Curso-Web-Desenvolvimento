// var , let , const
var numero = 5

if( numero > 0 ){
    var numero = 10
    console.log(numero)
}
console.log(numero)


// let cria um scopo para a variavel , não alterando a variavel definida no global
let numero2 = 5

if ( numero2 > 0 ){
    let numero2 = 10
    console.log( numero2 )
}

console.log( numero2 )

// const não permite que a variavel seja alterada e cria um scopo para ela também
const numero3 = 5

if ( numero3 > 0 ){
    const numero3 = 10
    console.log( numero3 )
}

console.log( numero3 )

// Arrow Function
const imprimeNome = ( nome ) => console.log( nome )
imprimeNome( "Leonardo" ) 

const soma = ( a , b ) => a + b

console.log( soma(  5 , 10 ) )

const pessoa = {
    nome: "Leonardo",
    sayNome(){
        setTimeout(
            function(){
                console.log(this)
                console.log(this.nome)
            },2000
        )
    }
}
// pessoa.sayNome()

const pessoa2 = {
    nome: "Leonardo",
    sayNome(){
        setTimeout(
            () => {
                console.log(this)
                console.log(this.nome)
            },2000
        )
    }
}
// pessoa2.sayNome()

// Filter
// Filtra os elementos de acordo com o bloco criado dentro da função
const listaNumeros = [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]

const maioresCinco = listaNumeros.filter( ( numero ) => {
    if( numero > 5 ){
        return numero
    }
})

console.log( maioresCinco )

// Map
const clientes = [
    {
        nome: "Leonardo",
        idade: 23
    },
    {
        nome: "Ana Luiza",
        idade: 24
    },
    {
        nome: "Murilo",
        idade: 16
    },
    {
        nome: "Carlos",
        idade: 15
    }
]

clientes.map( ( cliente ) => {
    if( cliente.idade < 18 ){
        cliente.autorizado = false
    }else{
        cliente.autorizado = true
    }
})

console.log(clientes)

// Template Literals
const nomeFuncionario = "Thais"
console.log( `O nome é ${ nomeFuncionario }` )


// Destruturing
const frutas = [ "Mamão","Melancia","Uva"]
const [h1 , h2 , h3] = frutas

console.log(h1 , h2 , h3)

const funcionario = {
        nome: "Gabriel",
        cargo: "Suporte",
        salario: 2200,
        chave: true,
        valeAlimentacao: false
    }
    

const { nome , chave  } = funcionario

console.log( nome , chave )

// Spread Operator ( ... )
// Coloca os elementos dentro de uma nova lista , ao invés a lista dentro da lista , exemplo:
const a1 = [ 1 , 2 , 3 ]
const a2 = [ 4 , 5 , 6 ]

const a3 = [ a1 , a2]
console.log( a3 )

// Agora usando o Spread Operator
const a4 = [...a1 , ...a2]
console.log( a4 )

// Spread Operator em objetos
const funcionarioEkoos = {
    id: 1,
    nome: "Leonardo",
    cargo: "Programador"
}

const salarioEkoos = {
    id_funcionario: 1,
    salario: 1800
}

const funcionaroCompleto = {...funcionarioEkoos , ...salarioEkoos}
console.log( funcionaroCompleto )


// Classes
class Produto {
    constructor( descricao , preco , peso ){
        this.descricao = descricao
        this.preco = preco
        this.peso = peso
    }

    getPrecoComDesconto( desconto ){
        return this.preco * ( desconto / 100 ) 
    }

    setPrecoComDesconto( desconto ){
        this.preco = this.preco - ( this.preco * ( desconto / 100 ) )
    }
}

const camisa = new Produto( "Camisa Cruzeiro 2019" , 100 , 0.3)

console.log(camisa.getPrecoComDesconto(30))


// Herança
class PessoaFisica{
    constructor( nome, cpf , idade ){
        this.nome = nome
        this.cpf = cpf 
        this.idade = idade
    }
}

class FuncionarioEkoos2 extends PessoaFisica{
    constructor( nome, cpf , idade, salario , cargo , habilidades) {
        super(nome , cpf , idade )
        this.salario = salario
        this.cargo = cargo
        this.habilidades = habilidades
    }

    imprimeSkills(){
        this.habilidades.forEach(element => {
            console.log( element )
        });
    }
}

const fun1 = new FuncionarioEkoos2("Leonardo" , 123456789 , 22 , 1200 , "Entregador",["Python" , "Javascript" , "css"])
console.log(fun1)
fun1.imprimeSkills()
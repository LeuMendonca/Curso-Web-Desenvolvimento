// Tipando uma variavel
const x:number = 10

console.log( x )

// Inferencia e Annotation
let y = 12 // Uma variavel inferencia pois já declara a tipagem como Number sem precisar especificar
let z:number = 12 // Uma variavel annotation  declara a tipagem como Number

let listNumber: number[] = [ 1 , 2 , 3]


// Tuplas
let myTuple: [string , number , string[]]

myTuple = ["texto" , 50 , ["Samuel Barbeiro" , "Frangolino"]]
myTuple = ["texto" , 50 , ["Samuel Barbeiro" , "Frangolino"]]

// Objetos
const pessoa: { 
    name:string,
    age: number,
    doc: number
} = {
    name: "Leonardo",
    age: 22,
    doc: 14259057650
}

console.log( pessoa )

// pessoa.endereco = "Manoel Ferreira dos Reis" -> Não é possivel acrescentar pois antes já foi tipado
let multiTipos:any = 22
multiTipos= "Leonardo"
multiTipos = true

// Union Type
let adm: boolean | string = 'S' 
adm =  true 

// Type Alias -> nomeando um tipo
type stringBool = string | boolean 

let adm2:stringBool = 'S'
adm2 = true

// enum
enum tamanho {
    P = "Pequeno",
    M = "Médio" ,
    G = "Grande"
}

const camisa = {
    name: "Camisa do Flamengo",
    tamanho: tamanho.M
}

console.log(camisa)

// Literal Types -> o valor só pode ser aquele e nenhum outro mais
let teste: "Autenticado" | null

teste = "Autenticado"
teste = null

console.log(teste)

// Funções
function soma( a:number , b:number ) {
    return a + b
}

console.log( soma(10 , 10) )

function showName( text:string ):string { // :string após os parametros serve para tipar o retorno da função
    return text
}

console.log(showName("Leonardo"))

const showMsg = ( msg:string):void => { // Void tipa a função , como uma função sem retorno
    console.log( msg )
}

showMsg("Sasasasasasa")

// ? serve para manter opcional o parametro
function greating( name:string , great?:string):void {

    if( great ) {
        console.log(`Olá ${ name } , ${ great }`)
        return
    } 

    if( !great ) console.log(`Olá ${ name }`)
    

}

greating("Samuel Barbeiro")
greating("Samuel Barbeiro", "Bom dia")

// Interfaces
interface MathFunctionParams {
    numero1:number,
    numero2:number
}

function sumNumbers( param:MathFunctionParams ):number{
    return param.numero1 + param.numero2
}

console.log( sumNumbers( { numero1:2 , numero2:5 } ) )


const numeros:MathFunctionParams = {
    numero1: 10,
    numero2: 10
}

console.log(sumNumbers(numeros))


// Narrowing
// checagem de tipos 
function tipoString( text:string | boolean ){
    if( typeof text === "string"){
        return `A string é ${text}`
    }
    return `É um valor booleano ${ text }`
}

console.log(tipoString("Texto teste"))
console.log(tipoString(true))

//  Generics -> É um conceito para aceitar qualquer tipo de parametro
function showArray<T>( arr: T[] ){
    arr.forEach( ( item ) => {
        console.log( item )
    })
}

showArray( ["teste" , "testinho" , "testão"] )

// Classes
class User {
    name
    role
    isApproved

    constructor( name:string , role:string , isApproved:boolean ){
        this.name = name 
        this.role = role 
        this.isApproved = isApproved
    }

    showUserName(){
        console.log("O nome do usuario é:" , this.name)
    }

    showUserRole(canShow:boolean){
        if( canShow ){
            console.log( `O nivel do usuario é ${this.role}` )
            return
        }
        console.log('Informação restrita')
    }
}

const leo = new User("Leonardo" , "admin" , true)
leo.showUserName()
leo.showUserRole(true)

// Interface em classes
interface IVehicle{
    brand: string
    showBrand(): void
}

class Car implements IVehicle{
    brand
    wheels

    constructor( brand:string , wheels:number){
        this.brand = brand 
        this.wheels = wheels
    }

    showBrand(): void {
        console.log(`A marca do carro é ${ this.brand }`)
    }
}

const Palio = new Car("Fiat" , 4)
Palio.showBrand()

// Herança
class SuperCarro extends Car{
    year

    constructor( brand:string , wheels:number , year:number ){
        super( brand , wheels )
        this.year = year
    }
}

const monza = new SuperCarro( "Chevrolet" , 4 , 2006 )

monza.showBrand() 

// Decorators
function BaseParameters(){
    return function <T extends { new (...args: any[] ) : {} }>( constructor: T){
        return class extends constructor{
            id = Math.random();
            createdAt = new Date();

            
        }
    }
}

@BaseParameters
class Usuario {
    nome;

    constructor( nome:string ){
        this.nome = nome 
    }
}

const u1 = new Usuario("sam")
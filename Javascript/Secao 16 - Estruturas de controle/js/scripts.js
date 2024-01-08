// 1 - Variáveis
let nome = "Matheus";

console.log(nome);

nome = "Matheus Battisti";

console.log(nome);

const idade = 31;

console.log(idade);

// idade = 32;

console.log(typeof nome);

console.log(typeof idade);

// 2 - mais sobre variáveis

// let 2teste = "inválido"
// let @teste = "inválido"

let a = 10,
  b = 20,
  c = 30;

console.log(a, b, c);

const nomecompleto = "Matheus Battisti";

const nomeCompleto = "João da Silva";

console.log(nomecompleto, nomeCompleto);

let _teste = "válido";

let $teste = "válido";

console.log(_teste, $teste);

// 3 - prompt

// const age = prompt("Digite sua idade: ");

// console.log(`Você tem ${age} anos!`);

// 4 - alert

// alert("Testando");

// const z = 10;

// alert(`O número é ${z}`);

// 5 - Math

console.log(Math.max(5, 2, 1, 10));

console.log(Math.floor(5.14));

console.log(Math.ceil(5.14));

// 6 - console

console.log("teste");

console.error("erro!");

console.warn("aviso!");


const numero = 10

// 7 - IF

if( numero >= 10){
  console.log("Maior do que 10")
}

// 8 - ELSE

if( numero >= 10){
  console.log("Maior do que 10")
}else{
  console.log("Menor do que 10")
}

// 9 - ELSE IF
if (numero > 10){
  console.log("Maior do que 10")
}else if(numero === 10){
  console.log("Número igual a 10")
}else{
  console.log("Menor do que 10")
}

// 10 - WHILE
let contador = 0
let contador2 = 0

while (contador < 5){
  console.log("Contador while:" + contador)
  contador++
}

do{
  console.log("Contador do while:" + contador2)
  contador2++
}while(contador2 < 10)


// FOR
for(let c = 0 ; c < 10 ; c++ ){
  console.log("Contador do for:" + c)
}

// BREAK
for(let c = 0 ; c < 10; c++){
  if (c === 5){
    break
  }
  console.log("Quebrando repetição:" + c)
}

// CONTINUE
for(let c = 0 ; c < 10; c++){
  if (c === 5){
    continue
  }
  console.log("Pulando repetição:" + c)
}

// SWITCH

const dia_semana = 'SEGUNDA'

switch(dia_semana){

  case 'DOMINGO':
    console.log("DOMINGOU PAPAI")
    break

  case 'SEGUNDA':
    console.log("SEGUNDOU PAPAI")
    break

  default:
    console.log("Não existe")
}
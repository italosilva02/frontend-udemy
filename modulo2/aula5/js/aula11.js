//alert('Ola mundo');

//window.confirm('O valor foi pago? ')

//window.prompt('Informe o seu nome: ')

//Exercicio 1

const nome = prompt('Informe o seu nome: ');
const num1 = parseInt(prompt("Informe o primeiro número: "));
const num2 = parseInt(prompt("Informe o segundo número: "));

let soma = num1 + num2

confirm(`Certo, ${nome}. A soma entre ${num1} e ${num2} é de ${soma}`);
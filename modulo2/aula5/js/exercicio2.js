const nome = 'Italo';
const sobrenome = 'Silva'
const idade = 30;
const peso = 84;
const altura = 1.84;

// Nome nasceu em anoNascimento

let imc; // peso / (altura * alltura);
imc = peso / (altura * altura);
let anoNascimento;
anoNascimento = 2021 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, e pesa', peso, 'kg')
console.log(`Tem ${altura} de altura e seu imc é de  ${imc}`)
console.log(nome, sobrenome, 'nasceu em ', anoNascimento)



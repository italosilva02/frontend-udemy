let num1 = 9.54578
let num2 = Math.floor(num1) // Math.floor arredonda o valor para um inteiro para baixa
let num3 = Math.ceil(num1) // Math.ceil arredonda o valor para um inteiro para cima
let num4 = Math.round(num1) // Math.round arrendonda para o número mais proximo ex: 9.54 vai para 10 // 9.49 vai para 9 // 9.50 arrendonda para cima


console.log(num2);
console.log(num3);
console.log(num4);
console.log(Math.max(1,2,3,4,8,9,100,452,-451,1458,345747,254656)); // Pega o maior número da sequência
console.log(Math.min(1,2,3,4,8,9,100,452,-451,1458,345747,254656)); // Pega o menor número da sequência

const aleatorio = Math.round(Math.random() * (10 - 5) + 5); // Um número aleatorio entre 10 e 5
console.log(aleatorio);
console.log(Math.random()); // Gera um número aleatorio entre 0 e 1
//-------------------------------------------------------------------------------------------
let pi = Math.PI;
console.log(pi.toFixed(4))

console.log(Math.pow(2,10)) // Número elevado
console.log(2 ** 10); // Número elevado


/*
primitivos (Imutáveis) - String, number, boolean, undefined, null, bigintm symbol
*/ 

/* 
Referência (Mutável) - array, object, function
*/

let a = [1,2,3,4];
let b = a;

console.log(a, b);

a.push(5);

console.log(a, b);

b.pop();
console.log(a, b);
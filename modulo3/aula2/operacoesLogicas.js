/*Operadores Lógicos

&& -> AND -> E -> Todas as expressões precisam ser verdadeiras para retornar true
|| -> OR -> OU 
! -> NOT -> NÃO*/ 

/*FALSY Values

false
0
'' "" `` 
null / undefined
NaN
*/ 

/*Qualquer coisa diferente de Falsy value é considerado como true*/ 

const expressao = false && false && false &&true && false;
const expressao1 = false && false && false &&false && false;
const expressao2 = false || false || false ||true || false;
const expressao3 = true || true || false ||false || true;
const expressao4 = false || false || false ||true || false;
const expressao5 = false && false && true &&true || false;

console.log(expressao, expressao1, expressao2, expressao3, expressao4, expressao5);


const usuario = 'Luiz';
const senha = '123456';

const vaiLogar = usuario === 'Luiz' && senha === '123456';

console.log('Vai logar: ' + vaiLogar);
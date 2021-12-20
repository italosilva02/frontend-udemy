const nome = prompt('Informe o seu nome: ')

document.write(`Seu nome é: ${nome} <br/>`) 
document.write(`Seu nome tem ${nome.length} letras <br/>`)
document.write(`A segunda letra do seu nome é ${nome[1]}<br/>`)
document.write(`Qual é ao primeiro índice da letra a no seu nome: ${nome.indexOf('a')}<br/>`)

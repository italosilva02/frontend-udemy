//const array = [1,52,6,4,5];
//array.push(4);
//console.log(array)

//const pessoa1 = {
 //   nome: 'Luiz',
 //   sobrenome: 'Miranda',
//    idade: 25
//};

//console.log(pessoa1.nome)

function criaPessoa (nome, sobrenome, idade){
    return {
        nome, sobrenome, idade
    };
}

const pessoa1 = criaPessoa('Luiz', 'Miranda', 25);
const pessoa2 = criaPessoa('Carlos', 'Oliveira', 25);
const pessoa3 = criaPessoa('Brenda', 'Silva', 25);
const pessoa4 = criaPessoa('Luisa', 'Lima', 25);
const pessoa5 = criaPessoa('Cleuza', 'Santana', 25);
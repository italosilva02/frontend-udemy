//IIFE

function meuEscopo (){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

   // form.onsubmit = function (evento){
   //     evento.preventDefault();
   // };

   const pessoas = [];
    function receberEvento (evento){
        evento.preventDefault();
        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')

       
      pessoas.push({
          nome: nome.value,
          sobrenome: sobrenome.value,
          peso: peso.value,
          altura: altura.value
      })

        console.log(pessoas);
        resultado.innerHTML += `${nome.value}, ${sobrenome.value}, ${peso.value} Kg, ${altura.value} metros;`;

    }

   form.addEventListener('submit', receberEvento);
}

meuEscopo();
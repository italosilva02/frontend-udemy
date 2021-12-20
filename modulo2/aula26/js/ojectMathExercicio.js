const numero = Number(prompt('Digite um número'));

const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero; 
texto.innerHTML = '';
texto.innerHTML += `<p> Raiz qudrada  ${Math.sqrt(numero)} </p>`;
texto.innerHTML += `<p> Seu número - 2 é = a  ${numero - 2} </p>`;